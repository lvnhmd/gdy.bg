'use strict';
process.chdir(__dirname);
// var bunyan = require('bunyan');

// var PrettyStream = require('bunyan-prettystream');
// var prettyStdOut = new PrettyStream();
// prettyStdOut.pipe(process.stdout);

// var log = bunyan.createLogger({
//     name: 'gdybg',
//     streams: [{
//         level: 'debug',
//         type: 'raw',
//         stream: prettyStdOut
//     }]
// });

var log = require('./log');

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
    // if (err) log.error(err);

    // if table sourcemetas exist, drop it before recreating 
    // that is because I can add additional sources to sources.json
    
    if (typeof tableInfo !== 'undefined') {
	    sourcemeta.deleteTable(function(err) {
	        if (err) log.error(err);
	        seed();
	    });
	} else {
	    	seed();
	}


});



var seed = function() {

    vogels.createTables(function(err) {
        if (err) log.error(err);

        // insert all sources into sourcemetas
        var sources = JSON.parse(require('fs').readFileSync(__dirname + '/sources/sources.json', 'utf8'));

        sourcemeta.create(sources, function(err, result) {
            if (err) log.error(err);
            result.forEach(function(doc) {

                log.info(doc.attrs.name);

                var tasks = [];
                var source = new require('./sources/' + doc.attrs.name);
                tasks.push(function(done) {
                    log.info('push ' + doc.attrs.name + '.meta');
                    source.meta(done, doc.attrs.name + '.meta done');
                });

                // tasks.push(function(arg1, done) {
                //     log.info('push ' + doc.attrs.name + '.xray');
                //     source.xray(done, doc.attrs.name + '.xray done');
                // });
                // tasks.push(function(arg1, arg2, done) {
                //     // console.log('3 : ' + arg2);
                //     // persist and validate and send email to admin
                //     helper.persistCompetitions(arg1, function(err, msg, validation) {
                //         if (err) log.error(err);
                //         // if (validation.length > 0) {
                //         // 	helper.persistValidation(validation, function() {
                //         // 		util.sendAdminEmail(validation[0].source, validation);
                //         // 		done(null, '4 : ' + arg1[0].source + ' validation and competitions persisted');
                //         // 	});
                //         // } else {
                //         done(null, '4 : ' + arg1[0].source + ' competitions persisted');
                //         // }
                //     });
                // });

                log.info(tasks);

                async.waterfall(tasks, function(err, result) {
                    if (err) log.error(err);
                    log.info('>>> DONE ', result);
                });

            });
        });

    });
};
