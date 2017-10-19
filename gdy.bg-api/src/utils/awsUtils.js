/*jslint node: true */
'use strict';
var http = require('http');
var https = require('https');
var Competition = require('../models/competition');
var _ = require('lodash');
var logger = require('../logger');
var AWS = require('aws-sdk');
// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var s3 = new AWS.S3();
const uuidv5 = require('uuid/v5');

module.exports.persistCompetitions = function (comps, done) {

    // logger.info("COMPS |",comps,"|")

    for (var index in comps) {

        (function (i) {

            var img = comps[i].img;

            var regexp = /([A-Z0-9_-]{1,}\.(?:png|jpg|gif|jpeg))/i;
            var match = regexp.exec(img);
            var iName;

            if (null != match) {
                iName = match[1];
            }
            // logger.info('img [', img, '] iName [', iName, ']');
            var key = uuidv5(img, uuidv5.URL) + '-' + iName;
            // logger.info('will write [', img, '] to s3 as [', key, ']');

            var andUploadToS3 = function (res) {
                res.setEncoding('binary');
                var body = '';
                res.on('data', function (chunk) {
                    // Agregates chunks
                    body += chunk;
                });
                res.on('end', function () {
                    // Once you received all chunks, send to S3
                    var params = {
                        Bucket: 'swagbag.club-images',
                        Key: key,
                        Body: new Buffer(body, 'binary'),
                        ACL: 'public-read'
                    };
                    s3.putObject(params, function (err, data) {

                        // logger.info('s3.putObject ', params);

                        if (err) {
                            logger.info('s3.putObject errored');
                            logger.error(err);
                        } else {

                            // logger.info('closesByDate : ', comps[i].url + ' : ' + comps[i].closesByDate);

                            Competition.get(comps[i].url, function (err, exists) {
                                if (err) logger.error(err);
                                else if (exists) {
                                    logger.info('Competition already exists ', exists.attrs.uri);
                                } else {
                                    Competition.create({
                                        uri: comps[i].url,
                                        title: comps[i].title,
                                        source: comps[i].source,
                                        closesByDate: comps[i].closesByDate,
                                        ttl: comps[i].ttl,
                                        date: comps[i].date,
                                        img: "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/" + key,
                                        show: comps[i].show
                                    },
                                        function (err, c) {
                                            if (err) logger.error(err);
                                            logger.info(' * New competition * : ', c.attrs);
                                        });
                                }
                                // convert i to number
                                var ipp = +i + 1;
                                if (ipp == comps.length) {
                                    done(null, comps[0].source + ' competitions persisted');
                                }
                            });
                        }
                    });
                });
            }

            if (img.startsWith('https'))
                https.get(img, andUploadToS3);
            else {
                // logger.info('>>> ' ,img);
                http.get(img, andUploadToS3);
            }
        })(index);
    }
}