'use strict';
var logger = require('./logger');

var async = require("async");
var helper = require('./sources/helper');
var Source = require('./models/source');

var AWS = require('aws-sdk');
// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var http = require('http');
var s3 = new AWS.S3();

const uuidv5 = require('uuid/v5');
var Competition = require('./models/competition');

module.exports.scrape = function () {
    const time = new Date();
    logger.info('gdy.bg-cron ran at ' + time);

    // insert all sources into sources
    var sources = JSON.parse(require('fs').readFileSync(__dirname + '/sources/sources.json', 'utf8'));

    logger.info('Sources : ' + JSON.stringify(sources));

    sources.forEach(function (s) {

        new Source({ name: s.name }).save(function (err, result) {

            var source = new require('./sources/' + result.attrs.name);

            async.waterfall([
                function (callback) {
                    logger.info(' ADD TASK ' + result.attrs.name + '.meta');
                    source.meta(callback(null, result.attrs.name + '.meta'));
                },
                function (arg1, callback) {
                    logger.info(' ADD TASK ' + result.attrs.name + '.xray');
                    // arg1 now equals 'one' and arg2 now equals 'two'
                    source.xray(function (err, res) {
                        callback(null, res, arg1 + ',' + result.attrs.name + '.xray');
                    });
                },
                function (arg1, arg2, callback) {
                    logger.info(' ADD TASK ' + result.attrs.name + '.persistCompetitions');
                    helper.persistCompetitions(arg1, function (err, msg) {
                        callback(null, arg2 + ',' + result.attrs.name + '.persistCompetitions'
                        );
                    });
                }

            ], function (err, res) {
                if (err) logger.error(err);
                logger.info(' TASKS COMPLETED ', res);
                return ' TASKS COMPLETED ' + res;
            });
        });
    });
};

module.exports.fetchImage = function (event, context) {
    console.log('event :', JSON.stringify(event));

    var comp = event.Records[0].dynamodb.NewImage;
    var url = comp.uri.S;

    var img = comp.img.S;
    var splits = img.split("/");
    var key = uuidv5(img, uuidv5.URL) + splits[splits.length - 1];

    http.get(img, function (res) {
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
                Body: body
            };
            s3.putObject(params, function (err, data) {
                if (err) {
                    console.error(err, err.stack);
                } else {
                    console.log(data);
                    // update record 
                    var comp = new Competition({
                        uri: url,
                        img: "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/" + key
                    });
                    comp.update(function (err, doc) {
                        if (err) logger.error(err);
                    });

                }
            });
        });
    });
};