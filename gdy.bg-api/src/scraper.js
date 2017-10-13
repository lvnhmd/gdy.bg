'use strict';
var logger = require('./logger');

var async = require("async");
var helper = require('./sources/helper');
var Source = require('./models/source');

logger.info('node env ', process.env.NODE_ENV);

module.exports.scrape = function () {
    const time = new Date();
    logger.info('scraper ran on ' + time);

    // insert all sources into sources
    var sources = JSON.parse(require('fs').readFileSync(__dirname + '/sources/sources.json', 'utf8'));

    logger.info('Sources : ' + JSON.stringify(sources));

    sources.forEach(function (s) {

        // logger.info("Will try to insert source ", s);

        new Source({ name: s.name,
                     favicon: s.favicon }).save(function (err, result) {

            // logger.info("Inserted source ", result.attrs);

            var source = new require('./sources/' + result.attrs.name.toLowerCase());

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