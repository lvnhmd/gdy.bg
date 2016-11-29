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
                tasks.push(function(done) {
                    logger.info('ADD TASK ' + doc.attrs.name + '.meta');
                    source.meta(done, doc.attrs.name + '.meta');
                });

                tasks.push(function(arg1, done) {
                    logger.info('ADD TASK ' + doc.attrs.name + '.xray');
                    source.xray(done, doc.attrs.name + '.xray');
                });
                
                tasks.push(function(arg1, arg2, done) {
                    
                    // persist and validate and send email to admin
                    helper.persistCompetitions(arg1, function(err, msg, validation) {
                        if (err) logger.error(err);
                        // if (validation.length > 0) {
                        // 	helper.persistValidation(validation, function() {
                        // 		util.sendAdminEmail(validation[0].source, validation);
                        // 		done(null, '4 : ' + arg1[0].source + ' validation and competitions persisted');
                        // 	});
                        // } else {
                        done(null, '4 : ' + arg1[0].source + ' competitions persisted');
                        // }
                    });
                });

                async.waterfall(tasks, function(err, result) {
                    if (err) logger.error(err);
                    logger.info('TASKS COMPLETED', result);
                });

            });
        });

    });
};
