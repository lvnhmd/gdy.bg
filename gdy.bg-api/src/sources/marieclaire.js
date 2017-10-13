/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

	meta: function () {
		var xOptions = {
			url: 'https://comps.marieclaire.co.uk/',
			scope: 'link',
			selector: '@href'

		};
		helper.persistSource('marieclaire', xOptions);
	},

	xray: function (end) {

		var x = Xray();
		var find_date_regex = /\d{2}-[A-Za-z]+-\d{4}/;
		var date_regex = /(?:\d{1}|\d{2})\/(?:\d{1}|\d{2})\/(?:\d{4}|\d{2})/;

		var done = function (err, result) {
			if (err) logger.error(err);
			logger.info(result);
		};


		function getCompetitionClosingDate(comp, done) {

			var i = helper.containsRegex(comp.ends, find_date_regex);

			var match = find_date_regex.exec(comp.ends);

			var splits = _.split(match[0], '-');

			var cd = splits[0].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[1]) + '/' + splits[2];

			helper.setClosingDate(date_regex, comp, cd);
			done(null, comp);

		};

		function getCompetitions(limit, done) {
			x('https://comps.marieclaire.co.uk/', '.competitionPreview', [{
				url: 'a@href',
				img: 'img@src',
				title: 'img@title',
				ends: '.datelist'
			}])
				.paginate('li.next a@href')
				.limit(limit)
				(function (err, data) {
					if (err) logger.error(err);

					// logger.info('>DATA ', data);

					for (var i in data) {

						data[i].url = data[i].url;
						data[i].img = data[i].img;
						data[i].source = 'marieclaire';
						data[i].title = data[i].title;
						data[i].ends = _.trim(data[i].ends).replace(/\r?\n|\r/g, '').replace(/\s/g, '');
					}

					data = _.uniqBy(data, 'url');
					// logger.info('data ', data);

					done(null, data);

				});
		};


		x('https://comps.marieclaire.co.uk/', 'li.last',
			'a@href'
		)(function (err, lastPageURL) {
			if (err) logger.error(err);
			//the last character of lastPageURL will be the limit for pagination 
			//http://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
			// logger.info('>lastPageURL ', lastPageURL);
			var limit = 1;
			if (lastPageURL)
				limit = lastPageURL.substr(lastPageURL.length - 5, 1);

			// logger.info('>PAGINATE ', +limit);
			var tasks = [];

			tasks.push(function (done) {
				getCompetitions(limit, done);
			});

			async.series(tasks, function (err, result) {
				if (err) logger.error(err);
				result = _.flattenDeep(result);

				var tasks = [];

				for (var i in result) {

					if (result[i]) {
						(function (comp) {
							tasks.push(function (done) {
								getCompetitionClosingDate(comp, done);
							});
						})(result[i]);
					}
				}

				async.series(tasks, function (err, result) {
					if (err) logger.error(err);
					// remove any duplicates
					result = _.uniqBy(result, 'url');
					end(null, result);
				});
			});

		});
	}
}