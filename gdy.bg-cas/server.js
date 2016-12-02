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

// tables will be created only if they do not exist

sourcemeta.describeTable(function(err, tableInfo) {

	// I do not want this error logged
    // if (err) logger.error(err);

    // if table sourcemetas exist, drop it before recreating 
    // that is because I can add additional sources to sources.json
    
    if (typeof tableInfo !== 'undefined') {
	    sourcemeta.deleteTable(function(err) {
	        if (err) logger.error(err);
	        seed();
	    });
	} else {
	    	seed();
	}


});


var seed = function() {

    vogels.createTables(function(err) {
        if (err) logger.error(err);

        // insert all sources into sourcemetas
        var sources = JSON.parse(require('fs').readFileSync(__dirname + '/sources/sources.json', 'utf8'));

        sourcemeta.create(sources, function(err, result) {
            if (err) logger.error(err);

             result.forEach(function(doc) {

                var tasks = [];
                var source = new require('./sources/' + doc.attrs.name);
                
                async.waterfall([
                     function(callback) {
                         // callback(null, 'one', 'two');
                         logger.info('ADD TASK ' + doc.attrs.name + '.meta');
                         source.meta(callback(null, doc.attrs.name + '.meta'));
                     },
                     function(arg1, callback) {
                         logger.info('ADD TASK ' + doc.attrs.name + '.xray');
                         // arg1 now equals 'one' and arg2 now equals 'two'
                         source.xray(function(err, msg) {
                             logger.info('end');
                             callback(null, [arg1, doc.attrs.name + '.xray']);
                         })
                        ;
                     },
                     function(arg1, arg2, callback) {
                         logger.info('ADD TASK ' + doc.attrs.name + '.persistCompetitions');
                         // arg1 now equals 'one' and arg2 now equals 'two'
                         helper.persistCompetitions(function(err, msg) {
                            logger.info('done');
                            callback(null, [arg1, arg2, doc.attrs.name + '.persistCompetitions']);
                        }
                        );
                     }

                 ], function(err, result) {
                     if (err) logger.error(err);
                     logger.info('TASKS COMPLETED', result);
                 });




                // tasks.push(function(done) {
                //     logger.info('ADD TASK ' + doc.attrs.name + '.meta');
                    
                //     source.meta(function(err, msg) {
                //         if (err) logger.error(err);
                //         logger.info(msg);
                //     }, doc.attrs.name + '.meta');

                // });

                // tasks.push(function(arg1, done) {
                //     logger.info('ADD TASK ' + doc.attrs.name + '.xray');
                //     source.xray(done, doc.attrs.name + '.xray');
                // });
                
                // tasks.push(function(arg1, arg2, done) {
                    
                //     logger.info('ADD TASK ' + doc.attrs.name + '.persistCompetitions');
                //     // persist and validate and send email to admin
                //     helper.persistCompetitions(arg1, function(err, msg, validation) {
                //         if (err) logger.error(err);
                //         // if (validation.length > 0) {
                //         // 	helper.persistValidation(validation, function() {
                //         // 		util.sendAdminEmail(validation[0].source, validation);
                //         // 		done(null, '4 : ' + arg1[0].source + ' validation and competitions persisted');
                //         // 	});
                //         // } else {
                        
                //         // done(null, arg1[0].source + '.persistCompetitions');
                //         // }
                //     });
                // });

                // async.waterfall(tasks, function(err, result) {
                //     if (err) logger.error(err);
                //     logger.info('TASKS COMPLETED', result);
                // });

            });
        });

    });
};
