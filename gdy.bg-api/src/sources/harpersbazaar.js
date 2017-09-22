/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

	meta: function (done) {
		var xOptions = {
			url: 'http://www.harpersbazaar.co.uk/',
			scope: 'link',
			selector: '@href'
		};
		helper.persistSource('harpersbazaar', xOptions, done);
	},

	xray: function (end) {

		var x = Xray();

		var date_regex = /\d{2}\/(?:\d{1}|\d{2})\/(?:\d{4}|\d{2})/;

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

			x(comp.url, 'iframe@src')(function (err, iSrc) {
				if (err) logger.error(err);

				if (typeof iSrc !== 'undefined') {

					helper.getAsString(iSrc, function (err, iframeContent) {

						var expired = 'Sorry, but this form is no longer accepting submissions';

						if (iframeContent.indexOf(expired) > -1) {

							// logger.info('COMP EXPIRED ');
							// if competition expired set the date to yesterday
							var date = new Date();
							date.setDate(date.getDate() - 1);

							var day = date.getDate() + '';
							var month = date.getMonth() + 1 + '';

							var d = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + date.getFullYear();

							// logger.info('COMP DATE ', d);

							setClosingDate(comp, d);
							done(null, comp);
						}
						else {
							setDefaultClosingDate(comp);
							done(null, comp);
						}

					});

				}
				else {
					setDefaultClosingDate(comp);
					done(null, comp);
				}
			});
		};

		function getCompetitions(done) {
			x('http://www.harpersbazaar.co.uk/culture/competitions/',
				'.landing-feed--story', [{
					url: 'a@href',
					img: 'img@data-src',
					title: 'a.landing-feed--story-title'
				}])(function (err, data) {
					if (err) logger.error(err);

					data = _.filter(data, function (c) {
						return new RegExp("\\bwin\\b").test(c.url.toLowerCase());
					});

					for (var i in data) {
						data[i].url = data[i].url;
						data[i].img = data[i].img;
						data[i].source = 'harpersbazaar';
						data[i].title = _.trim(data[i].title);
					}

					data = _.uniqBy(data, 'url');
					// logger.info('data ', data);

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
};