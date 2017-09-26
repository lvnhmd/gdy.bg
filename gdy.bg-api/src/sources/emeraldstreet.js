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
			url: 'http://www.emeraldstreet.com',
			scope: 'link',
			selector: '@href'
		};
		helper.persistSource('emeraldstreet', xOptions);
	},

	xray: function (end) {

		var x = Xray();
		var find_date_regex = /\d{2}([A-Za-z]*[ ]+)*\d{4}/;
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

			x(comp.url, ['i'])(function (err, it) {
				if (err) logger.error(err);

				// logger.info(' >>> FOLLOW comp.url ', comp.url);

				if (it && helper.containsRegex(it, find_date_regex) > -1) {

					var match = find_date_regex.exec(it);
					// logger.info('Date ', match[0]);
					var splits = _.split(match[0], ' ');

					var cd = splits[0].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[1]) + '/' + splits[2];
					// logger.info('Closing date ', cd);
					helper.setClosingDate(date_regex, comp, cd);
					done(null, comp);
				}

				else {
					setDefaultClosingDate(comp);
					done(null, comp);

				} //close else
			});

		};

		function getCompetitions(done) {
			x('http://www.emeraldstreet.com/competitions', 'div.card', [{
				url: 'a@href',
				img: 'img@data-src',
				title: '.card__title',
				sell: '.card__sell'
			}])(function (err, data) {
				if (err) logger.error(err);

				for (var i in data) {

					data[i].url = data[i].url;
					data[i].img = data[i].img;
					data[i].source = 'emeraldstreet';
					data[i].title = _.trim(data[i].title); //+ ' : ' + _.trim(data[i].sell);

					delete data[i].sell;

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
