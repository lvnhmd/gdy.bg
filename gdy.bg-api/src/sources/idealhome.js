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
			url: 'https://comps.idealhome.co.uk/',
			scope: 'link',
			selector: '@href'

		};
		helper.persistSource('idealhome', xOptions);
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

			var setDefaultClosingDate = function (comp) {
				var d = new Date();
				var day = d.getDate() + '';
				var month = d.getMonth() + 1 + '';
				var date = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

				comp.date = date;
				// count the current day, add(1,'days')
				var closesByDate = moment(date, 'DD/MM/YYYY').add(1, 'days').toDate();
				comp.closesByDate = closesByDate;
				comp.ttl = (+closesByDate) / 1000;
				// calculate days between now and closesByDate
				// moment loses a day, add it back 
				comp.daysToEnter = moment(closesByDate).diff(moment(new Date()), 'days') + 1;
			};

			var setClosingDate = function (comp, dateStr) {
				var date = dateStr.match(date_regex)[0];
				var format = date.search(/\d{4}/) > -1 ? 'DD/MM/YYYY' : 'DD/MM/YY';

				comp.date = date;
				// count the current day, add(1,'days')
				var closesByDate = moment(date, format).add(1, 'days').toDate();
				comp.closesByDate = closesByDate;
				comp.ttl = (+closesByDate) / 1000;
				// calculate days between now and closesByDate
				// moment loses a day, add it back 
				comp.daysToEnter = moment(closesByDate).diff(moment(new Date()), 'days') + 1;
			};

			var i = helper.containsRegex(comp.ends, find_date_regex);
			// logger.info('helper.containsRegex ', i);

			// if (helper.containsRegex(comp.ends+'', find_date_regex) > -1) {

			// logger.info('comp.ends [', comp.ends, '] contains [', find_date_regex, ']');
			var match = find_date_regex.exec(comp.ends);
			// logger.info('Date ', match[0]);
			var splits = _.split(match[0], '-');

			var cd = splits[0].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[1]) + '/' + splits[2];
			// logger.info('Closing date ', cd);
			setClosingDate(comp, cd);
			done(null, comp);
			// }

			// else {
			// 	setDefaultClosingDate(comp);
			// 	done(null, comp);

			// }

		};

		function getCompetitions(limit, done) {
			x('https://comps.idealhome.co.uk/', '.competitionPreview', [{
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
						data[i].source = 'idealhome';
						data[i].title = data[i].title;
						data[i].ends = _.trim(data[i].ends).replace(/\r?\n|\r/g, '').replace(/\s/g, '');
					}

					data = _.uniqBy(data, 'url');
					// logger.info('data ', data);

					done(null, data);

				});
		};


		x('https://comps.idealhome.co.uk/', 'li.last',
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
					// remove any with daysToEnter < 0
					_.remove(result, function (c) {
						return c.daysToEnter < 0;
					});
					end(null, result);
				});
			});

		});
	}
}