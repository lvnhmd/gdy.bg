//next one is http://comps.housetohome.co.uk/allcompetitions.php
//http://competitions.womanandhome.com/allcompetitions.php
//http://www.timeout.com/london/competitions
//http://www.standard.co.uk/topic/competition

var async = require("async");
var SourceMeta = require('../models/sourcemeta');
var util = require('../util');
var helper = require('./sources/helper');

module.exports = {
	scrape: function(interval) {

		console.log('scraping scheduled for ' + interval);

		//run this script every hour and start it from gulp
		var scrapeTask = setInterval(function() {

			SourceMeta.find({},
				function(err, docs) {

					var done = function(err, msg) {
						console.log(msg);
					};

					docs.forEach(function(doc) {

						var tasks = [];
						var source = new require('./sources/' + doc.name);
						tasks.push(
							function(done) {
								// console.log('1 : ' + doc.name + ' meta');
								source.meta(done, doc.name + ' meta done');
							});
						tasks.push(function(arg1, done) {
							// console.log('2 : ' + arg1);
							source.xray(done, doc.name + ' xray done');
						});
						tasks.push(function(arg1, arg2, done) {
							// console.log('3 : ' + arg2);
							// persist and validate and send email to admin
							helper.persistCompetitions(arg1, function(err, msg, validation) {
								if (validation.length > 0) {
									helper.persistValidation(validation, function() {
										util.sendAdminEmail(validation[0].source, validation);
										done(null, '4 : ' + arg1[0].source + ' validation and competitions persisted');
									});
								} else {
									done(null, '4 : ' + arg1[0].source + ' competitions persisted');
								}
							});
						});

						async.waterfall(tasks, function(err, results) {
							if (err) console.log(error);
							console.log('>>> DONE ', results);
						});

					});

					if (interval == util.interval.now) {
						clearInterval(scrapeTask);
					}
				});
		}, interval);


	}
};