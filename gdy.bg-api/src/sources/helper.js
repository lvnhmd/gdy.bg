/*jslint node: true */
'use strict';
var http = require('http');
var Competition = require('../models/competition');
var Source = require('../models/source');
var Xray = require('x-ray');
var x = Xray();
var _ = require('lodash');

var logger = require('../logger');

var AWS = require('aws-sdk');
// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var s3 = new AWS.S3();
const uuidv5 = require('uuid/v5');

module.exports = {

    get: function (_host, _path, callback) {

        return http.get({
            host: _host,
            path: _path
        }, function (response) {

            // Continuously update stream with data
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {

                // Data reception is done, do whatever with it!
                var parsed = {};
                try {
                    parsed = JSON.parse(body);
                } catch (e) {
                    return callback('can not get ' + _host + _path, null);
                }

                return callback(null, parsed);
            });
        });

    },

    persistSource: function (source, xOptions) {

        x(xOptions.url, xOptions.scope, [
            xOptions.selector
        ])(function (err, links) {

            // <link rel="shortcut icon" href="/assets/img/stylist/meta/6b25e2b7f02f0dd5a43a88c3cb929267/favicon.ico">
            if (err) logger.error(err);

            var filtered = _.filter(links, function (link) {
                return link.match('favicon');
            });

            var meta = new Source({
                name: source,
                favicon: (filtered[0]) ? filtered[0] : ''
            });

            meta.save(function (err, doc) {
                if (err) logger.error(err);
            });

        });

    },

    persistCompetitions: function (comps, done) {

        for (var index in comps) {

            (function (i) {

                var comp = new Competition({
                    uri: comps[i].url,
                    title: comps[i].title,
                    source: comps[i].source,
                    closesByDate: comps[i].closesByDate,
                    ttl: comps[i].ttl
                });

                var img = comps[i].img;
                var splits = img.split("/");
                var key = uuidv5(img, uuidv5.URL) + splits[splits.length - 1];

                http.get(img, function (res) {
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
                            if (err) {
                                console.error(err, err.stack);
                            } else {
                                // update record 
                                comp.attrs.img = "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/" + key;

                                comp.update(function (err, doc) {
                                    if (err) logger.error(err);
                                    console.log('Persisted : ', doc.attrs);
                                    // convert i to number
                                    var ipp = +i + 1;
                                    if (ipp == comps.length) {
                                        done(null, comps[0].source + ' competitions persisted');
                                    }
                                });
                            }
                        });
                    });
                });
            })(index);
        }
    },

    containsRegex: function (a, regex) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].search(regex) > -1) {
                return i;
            }
        }
        return -1;
    }

};
