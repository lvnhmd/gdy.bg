'use strict';
var logger = require('./logger');

var async = require("async");
var helper = require('./sources/helper');

logger.info('node env ', process.env.NODE_ENV);

module.exports.scrape = function () {
    const time = new Date();
    logger.info('scraper ran on ' + time);

    var sources = JSON.parse(require('fs').readFileSync(__dirname + '/sources/sources.json', 'utf8'));

    logger.info('Sources : ' + JSON.stringify(sources));

    sources.forEach(function (s) {

        var source = new require('./sources/' + s.name.toLowerCase());

        async.waterfall([

            function (callback) {
                logger.info(' ADD TASK ' + s.name + '.xray');

                source.xray(function (err, res) {
                    callback(null, res, s.name + '.xray');
                });
            },
            function (arg1, arg2, callback) {
                logger.info(' ADD TASK ' + s.name + '.persistCompetitions');

                helper.persistCompetitions(arg1, function (err, msg) {
                    callback(null, arg2 + ',' + s.name + '.persistCompetitions'
                    );
                });
            }

        ], function (err, res) {
            if (err) logger.error(err);
            logger.info(' TASKS COMPLETED ', res);
            return ' TASKS COMPLETED ' + res;
        });
    });
};