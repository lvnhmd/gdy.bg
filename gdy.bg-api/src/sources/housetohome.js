/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var utf8 = require('utf8');
var helper = require('./helper');
var util = require('../../util.js');
var async = require("async");
var moment = require('moment');

module.exports = {

	meta: function(done) {
		var xOptions = {
			url: 'http://comps.housetohome.co.uk',
			scope: 'link',
			selector: '@href'

		};
		helper.persistSource('housetohome', xOptions, done);
	},

	xray: function(end) {

		var x = Xray();

		var done = function(err, result) {
			if (err) console.log(err);
			console.log(result);
		};

		function getCompetitionClosingDate(comp, done) {
			// #calendar .time-left
			x(comp.url, 'div#calendar', '.time-left strong')(function(err, days) {
				if (err) console.log(err);

				if (days) {
					comp.closesByDate = moment().add(days, 'days');
				}
				done(null, comp);
			});
		};

		function getCompetitionImage(comp, done) {
			//x-ray the page in obj.url
			//if there is image-container
			x(comp.url, 'div#image-container img', '@src')
				(function(err, src) {
					if (err) console.log(err);
					comp.img = src;
					done(null, comp);
				});

		};

		function getCompetitions(limit, done) {
			x('http://comps.housetohome.co.uk/allcompetitions.php', 'div.comp-links a', [{
					url: '@href',
					img: 'a img@src',
					title: 'a img@title'
				}])
				.paginate('li.next a@href')
				.limit(limit)(function(err, data) {
					if (err) console.log(err);
					// data contains the competitions scraped from all the pages
					var comps = [];
					for (var i in data) {
						data[i].title = data[i].title.replace(/[^A-Za-z0-9 ,.?!_='@-]/ig, '');
						data[i].source = 'housetohome';
					}
					done(null, data);
				});
		};


		x('http://comps.housetohome.co.uk/allcompetitions.php', 'li.last',
			'a@href'
		)(function(err, lastPageURL) {
			if (err) console.log(err);
			//the last character of lastPageURL will be the limit for pagination 
			//http://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
			var limit = 1;
			if (lastPageURL)
				limit = lastPageURL.slice(-1);

			var tasks = [];

			tasks.push(function(done) {
				getCompetitions(limit, done);
			});

			async.series(tasks, function(err, results) {
				if (err) console.log(error);
				results = _.flattenDeep(results);

				var tasks = [];
				for (var i in results) {
					console.log(results[i].url);
					if (results[i]) {
						(function(comp) {
							tasks.push(function(done) {
								getCompetitionImage(comp, done);
							});
						})(results[i]);
					}
				}

				for (var i in results) {
					if (results[i]) {
						(function(comp) {
							tasks.push(function(done) {
								getCompetitionClosingDate(comp, done);
							});
						})(results[i]);
					}
				}

				async.series(tasks, function(err, results) {
					if (err) console.log(error);

					//remove any duplicates
					results = _.uniqBy(results, 'url');

					end(null, results, 'housetohome xray done');

				});

			});

		});
	}
}