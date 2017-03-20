/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

	meta: function() {
		var xOptions = {
			url: 'http://www.elleuk.com/competitions',
			scope: 'link',
			selector: '@href'

		};
		helper.persistSource('elle', xOptions);
	},

	xray: function(end) {

		var x = Xray();

		var done = function(err, result) {
			if (err) logger.error(err);
			logger.info(result);
		};

		function getCompetitionClosingDate(comp, done) {
			x(comp.url, '.wufoo')(function(err, copy) {
				if (err) logger.error(err);

				if (copy) {
					// var startI = copy.indexOf('closes on') + 'closes on '.length;
					// var endI = copy.indexOf('. For full terms');

					// var date = copy.substring(startI, endI).split(' ');
					// var day = date[0];
					// var month = 'January___February__March_____April_____May_______June______July______August____September_October___November__D‌​ecember__'.indexOf(date[1]) / 10 + 1;
					// var year = date[2];

					// comp.closes = moment(day + '/' + month + '/' + year, 'DD/MM/YYYY').add(1, 'days');
					comp.closes = copy;

				}
				done(null, comp);
			});
		};

		function getCompetitions(done) {
			x('http://www.elleuk.com/promotion/', 'div.landing-feed--story', [{
					url: 'a.landing-feed--story-title@href',
					img: 'div.landing-feed--story-image',
					title: 'a.landing-feed--story-title'
				}])
				.paginate('div.pagination a@href')
				.limit(10)(function(err, data) {
					if (err) logger.error(err);
					for (var i in data) {
						// substring(0, closes.length - 4) + closes.substring(closes.length - 2, closes.length);
						// data[i].title = data[i].title.substring(0, data[i].title.indexOf(' on GLAMOUR.com (UK)'));
						data[i].source = 'elle';
					}

					done(null, data);


				});
		};


		var tasks = [];

		tasks.push(function(done) {
			getCompetitions(done);
		});

		async.series(tasks, function(err, result) {
			if (err) logger.info(error);
			// console.dir(result);
			result = _.flattenDeep(result);
			result = _.uniqBy(result, 'url');

			// var tasks = [];
			// for (var i in result) {
			// 	if (result[i]) {
			// 		(function(comp) {
			// 			tasks.push(function(done) {
			// 				getCompetitionClosingDate(comp, done);
			// 			});
			// 		})(result[i]);
			// 	}
			// }

			// async.series(tasks, function(err, result) {
			// 	if (err) logger.info(error);
				end(null, result);
			// });
		});
	}
}