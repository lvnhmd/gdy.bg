'use strict';
let logger = require('./logger');

let async = require("async");
let scrapeUtils = require('./utils/scrapeUtils');
let awsUtils = require('./utils/awsUtils');
let dateUtils = require('./utils/dateUtils');

let _ = require('lodash');
let Xray = require('x-ray');

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

    console.log(process.argv);

    if (process.argv[2] == 'test') {
        sources = JSON.parse(require('fs')
            .readFileSync(__dirname + '/sources/test.json', 'utf8'));
    }


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
                                logger.info("Last page ", limit);
                                callback(null, limit, sConf.name + ': [getLastPage');
                            });
                    } else callback(null, 1, sConf.name + ': [getLastPage');

                },
                function (limit, msg, callback) {
                    logger.info('Add series of tasks to get competitions for ' + sConf.name);

                    let tasks = [];

                    sConf.xOptsComps.forEach(function (xOpts) {
                        if (sConf.parseJson) {
                            tasks.push(function (xDone) {
                                scrapeUtils.parseJson(sConf, xOpts, xDone);
                            });
                        } else {
                            tasks.push(function (xDone) {
                                scrapeUtils.getCompetitions(sConf, limit, xOpts, xDone);
                            });
                        }
                    });

                    async.series(tasks, function (err, result) {
                        if (err) logger.error(err);

                        result = _.flattenDeep(result);
                        logger.info('RESULT ', result);
                        let xTasks = [];

                        for (var i in result) {
                            if (result[i]) {
                                (function (comp) {
                                    if (!sConf.getClosingDate && !sConf.getImg) {
                                        xTasks.push(function (xDone) {
                                            xDone(null, comp);
                                        });
                                    }
                                    if (sConf.getClosingDate) {
                                        xTasks.push(function (xDone) {
                                            eval(sConf.getClosingDate);
                                        });
                                    }
                                    if (sConf.getImg) {
                                        xTasks.push(function (xDone) {
                                            eval(sConf.getImg);
                                        });
                                    }
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
                    logger.info('DATA TO PERSIST ', data);
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