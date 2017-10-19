'use strict';
let logger = require('./logger');

let async = require("async");
let scrapeUtils = require('./utils/scrapeUtils');
let awsUtils = require('./utils/awsUtils');
let dateUtils = require('./utils/dateUtils');

let _ = require('lodash');
let Xray = require('x-ray');
logger.info('Node env ', process.env.NODE_ENV);

module.exports.scrape = function () {
    const time = new Date();
    logger.info('Scraper ran on ' + time);

    let x = Xray();

    let xDone = function (err, result) {
        if (err) logger.error(err);
        logger.info(result);
    };

    let sources = JSON.parse(require('fs')
        .readFileSync(__dirname + '/sources/sources.json', 'utf8'));

    logger.info('Sources : ' + JSON.stringify(sources, null, 2));

    sources.forEach(function (sConf) {
        if (!sConf.show || sConf.manual) {
            logger.info('Not scraping source: ' + sConf.name);
        }
        else {
            // let source = {};
            // if (sConf.required) source = new require('./sources/' + sConf.name.toLowerCase());
            async.waterfall([
                function (callback) {
                    logger.info('Add task getLastPage for ' + sConf.name);
                    if (sConf.paginate) {
                        scrapeUtils.getLastPage(sConf.xOptsPgntnLimit,
                            function (err, limit) {
                                callback(null, limit, sConf.name + ': [getLastPage');
                            });
                    } else callback(null, 1, sConf.name + ': [getLastPage');

                },
                function (limit, msg, callback) {
                    logger.info('Add series of tasks to get competitions for ' + sConf.name);

                    let tasks = [];

                    sConf.xOptsComps.forEach(function (xOpts) {
                        tasks.push(function (xDone) {
                            scrapeUtils.getCompetitions(sConf, limit, xOpts, xDone);
                        });
                    });

                    async.series(tasks, function (err, result) {
                        if (err) logger.error(err);

                        result = _.flattenDeep(result);

                        let xTasks = [];

                        for (var i in result) {

                            if (result[i]) {
                                (function (comp) {
                                    // add dummy task in case the source does not have any other tasks which can invoke 
                                    // done and pass the result to the "series finale" callback 
                                    // xTasks.push(function (xDone) {
                                    //     xDone(null, comp);
                                    // });
                                    if (sConf.getClosingDate)
                                        xTasks.push(function (xDone) {
                                            var name = sConf.name.toLowerCase();
                                            if (name === 'glamour') {
                                                x(comp.url, 'iframe.bb-interactive@src')(function (err, iSrc) {
                                                    if (err) logger.error(err);
                                                    dateUtils.getCompetitionClosingDate(iSrc, sConf, comp, xDone);
                                                });
                                            }
                                            else if (name === 'cntraveller') {
                                                dateUtils.getCompetitionClosingDate(comp.url, sConf, comp, xDone);
                                            }
                                            // else source.getCompetitionClosingDate(sConf, comp, xDone);
                                        });
                                    if (sConf.getImg)
                                        xTasks.push(function (xDone) {
                                            scrapeUtils.getCompetitionImg(comp, xDone);
                                        });
                                })(result[i]);
                            }
                        }

                        async.series(xTasks, function (err, data) {
                            if (err) logger.error(err);
                            callback(null, data, msg + ',' + 'series of tasks to get competitions')
                                
                        });
                    });

                },
                function (data, msg, callback) {
                    logger.info('Add task persistCompetitions for ' + sConf.name);
                    awsUtils.persistCompetitions(data, function (err, result) {
                        callback(null, msg + ',' + 'persistCompetitions]');
                    });
                }

            ], function (err, res) {
                if (err) logger.error(err);
                logger.info('Tasks completed: ', res);
                return 'Tasks completed: ' + res;
            });
        }
    });
};