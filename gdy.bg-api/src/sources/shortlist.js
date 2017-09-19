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
			url: 'http://www.shortlist.com',
			scope: 'link',
			selector: '@href'

		};

		helper.persistSource('shortlist', xOptions);

	},

	xray: function (end) {

		var x = Xray();
		var date_regex = /\d{2}\/\d{2}\/(?:\d{4}|\d{2})/;

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

			x(comp.url, ['em'])(function (err, em) {
				if (err) logger.error(err);

				var i = helper.containsRegex(em, date_regex);
				if (em && i > -1) {
					setClosingDate(comp, em[i]);
					done(null, comp);
				}
				else {

					x(comp.url, ['i'])(function (err, it) {
						if (err) logger.error(err);

						var i = helper.containsRegex(it, date_regex);
						if (it && i > -1) {
							setClosingDate(comp, it[i]);
							done(null, comp);
						}

						else {

							// logger.info(' >>> FOLLOW comp.url ', comp.url);

							helper.getAsString(comp.url, function (err, compURLContent) {

								// 25\/09\/17
								var dr = /\d{2}\\\/\d{2}\\\/(?:\d{4}|\d{2})/;

								var match = dr.exec(compURLContent);

								if (null != match) {

									var d = match[0].replace(/\\\//g, "/");

									logger.info(' >>> EXTRACT CLOSING DATE ', d);

									setClosingDate(comp, d);
									done(null, comp);
								}
								else {
									setDefaultClosingDate(comp);
									done(null, comp);
								}
							});
						}
					});

				}
			});
		};

		function getCompetitions(done) {
			x('http://www.shortlist.com/win', 'article', [{
				url: 'a@href',
				img: 'img@src',
				title: 'a@aria-label'
			}])(function (err, data) {
				if (err) logger.error(err);

				for (var i in data) {

					data[i].img = data[i].img;
					data[i].source = 'shortlist';

					var words = _.split(data[i].title, ' ');
					var title = '';
					for (var j in words) {
						var word = words[j];

						if (/^[A-Z]/.test(word)) {
							word = word.charAt(0) + word.substr(1, word.length).toLowerCase();
						}

						title += word + ' ';
					}

					data[i].title = title.trim();

				}

				done(null, data);

			});
		};

		var tasks = [];

		tasks.push(function (done) {
			getCompetitions(done);
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

	}
}
