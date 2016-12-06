'use strict';
process.chdir(__dirname);

var logger = require('./logger');

// TODO : check out vogels-cache as well
var vogels = require('vogels'),
    _ = require('lodash'),
    util = require('util'),
    AWS = vogels.AWS,
    Joi = require('joi');

var async = require("async");
var helper = require('./sources/helper');
var sourcemeta = require('./models/sourcemeta');


AWS.config.loadFromPath(__dirname + '/credentials.json');
logger.info(AWS.config);
// tables will be created only if they do not exist

// sourcemeta.describeTable(function(err, tableInfo) {

//     // I do not want this error logged
//     // if (err) logger.error(err);

//     // if table sourcemetas exist, drop it before recreating
//     // that is because I can add additional sources to sources.json

//     if (typeof tableInfo !== 'undefined') {
//         sourcemeta.deleteTable(function(err) {
//             if (err) logger.error(err);
//             seed();
//         });
//     } else {
//         seed();
//     }

// });


// var seed = function() {

//     vogels.createTables(function(err) {
//         if (err) logger.error(err);

        // insert all sources into sourcemetas
        var sources = JSON.parse(require('fs').readFileSync(__dirname +
            '/sources/sources.json', 'utf8'));

        sourcemeta.update(sources, function(err, result) {
            if (err) logger.error(err);

            console.dir(result);
            console.dir(sources);

            sources.forEach(function(doc) {

                var tasks = [];
                var source = new require('./sources/' + doc.name);

                async.waterfall([
                    function(callback) {
                        // callback(null, 'one', 'two');
                        logger.info('ADD TASK ' + doc.name +
                            '.meta');
                        source.meta(callback(null, doc.name +
                            '.meta'
                        ));
                    },
                    function(arg1, callback) {
                        logger.info('ADD TASK ' + doc.name +
                            '.xray');
                        // arg1 now equals 'one' and arg2 now equals 'two'
                        source.xray(function(err, result) {
                            // logger.info('end');
                            callback(null, result, arg1 + ',' + doc.name +
                                '.xray');
                        });
                    },
                    function(arg1, arg2, callback) {
                        logger.info('ADD TASK ' + doc.name +
                            '.persistCompetitions');
                        // arg1 now equals 'one' and arg2 now equals 'two'
                        helper.persistCompetitions(arg1, function(err,
                            msg) {
                            // logger.info('done');
                            callback(null, arg2 + ',' + doc.name +
                                '.persistCompetitions'
                            );
                        });
                    }

                ], function(err, result) {
                    if (err) logger.error(err);
                    logger.info('TASKS COMPLETED', result);
                });

            });
        });

//     });
// };
