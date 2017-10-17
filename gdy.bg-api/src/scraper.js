'use strict';
let logger = require('./logger');

let async = require("async");
let helper = require('./sources/helper');
let _ = require('lodash');
let Xray = require('x-ray');
logger.info('node env ', process.env.NODE_ENV);

module.exports.scrape = function () {
    const time = new Date();
    logger.info('scraper ran on ' + time);

    let x = Xray();

    let xDone = function (err, result) {
        if (err) logger.error(err);
        logger.info(result);
    };

    let getCompetitions = function (conf, limit, xOpts, done) {

        x(xOpts.url, xOpts.selector, xOpts.format)
            .paginate(conf.pageSelector)
            .limit(limit)
            (function (err, data) {
                if (err) logger.error(err);

                if (conf.dataFilters.length > 0) {
                    // apply each data filter 

                    for (var i in conf.dataFilters) {
                        data = _.filter(data, function (c) {
                            return new RegExp(conf.dataFilters[i].regex)
                                .test(c[conf.dataFilters[i].property].toLowerCase());
                        });
                    }
                }

                for (var i in data) {
                    data[i].url = data[i].url;
                    data[i].img = data[i].img;

                    if (conf.name.toLowerCase() == 'glamour') {
                        var splits = _.split(data[i].img, ',');
                        data[i].img = _.split(splits[2].trim(), ' ')[0];
                    }

                    data[i].source = conf.name.toLowerCase();
                    data[i].title = _.trim(data[i].title).replace(/\r?\n|\r/g, '');
                }

                data = _.uniqBy(data, 'url');
                done(null, data);

            });
    };


    let sources = JSON.parse(require('fs')
        .readFileSync(__dirname + '/sources/sources.json', 'utf8'));

    logger.info('Sources : ' + JSON.stringify(sources));

    sources.forEach(function (sConf) {

        if (sConf.show && !sConf.manual) {
            let source = new require('./sources/' + sConf.name.toLowerCase());
            async.waterfall([
                function (callback) {
                    logger.info(' ADD TASK ' + sConf.name + '.paginate');
                    if (sConf.paginate) {
                        source.paginate(sConf.xOptsPgntn,
                            function (err, limit) {
                                callback(null, limit, sConf.name + '.paginate');
                            });
                    } else callback(null, 1, sConf.name + '.paginate');
                },
                function (limit, msg, callback) {
                    logger.info(' ADD TASK ' + sConf.name + '.xray');

                    let tasks = [];

                    sConf.xOptsComps.forEach(function (xOpts) {
                        tasks.push(function (xDone) {
                            getCompetitions(sConf, limit, xOpts, xDone);
                        });
                    });

                    async.series(tasks, function (err, result) {
                        if (err) logger.error(err);

                        result = _.flattenDeep(result);

                        let xTasks = [];

                        if (sConf.getClosingDate) {
                            for (var i in result) {

                                if (result[i]) {
                                    (function (comp) {
                                        xTasks.push(function (xDone) {
                                            source.getCompetitionClosingDate(sConf, comp, xDone);
                                        });
                                    })(result[i]);
                                }
                            }
                        }
                        if (sConf.getImg) {
                            for (var i in result) {

                                if (result[i]) {
                                    (function (comp) {
                                        xTasks.push(function (xDone) {
                                            source.getCompetitionImg(comp, xDone);
                                        });
                                    })(result[i]);
                                }
                            }
                        }

                        async.series(xTasks, function (err, data) {
                            if (err) logger.error(err);
                            callback(null, data, msg + ',' + sConf.name + '.xray');
                        });
                    });

                },
                function (data, msg, callback) {
                    logger.info(' ADD TASK ' + sConf.name + '.persistCompetitions');
                    helper.persistCompetitions(data, function (err, result) {
                        callback(null, msg + ',' + sConf.name + '.persistCompetitions'
                        );
                    });
                }

            ], function (err, res) {
                if (err) logger.error(err);
                logger.info(' TASKS COMPLETED ', res);
                return ' TASKS COMPLETED ' + res;
            });
        } else {
            logger.info('NOT SCRAPING SOURCE: ' + sConf.name);
        }
    });
};