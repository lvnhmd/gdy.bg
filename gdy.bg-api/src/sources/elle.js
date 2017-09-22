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
					
					comp.closesByDate = copy;

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
			if (err) logger.error(err);
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