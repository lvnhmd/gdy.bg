/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

	xray: function (end) {

		var x = Xray();

		var done = function (err, result) {
			if (err) logger.error(err);
			logger.info(result);
		};

		function getCompetitions(done) {
			x('http://www.elleuk.com/promotion/', 'div.landing-feed--story', [{
				url: 'a.landing-feed--story-title@href',
				img: 'img.swap-image@data-src',
				title: 'a.landing-feed--story-title'
			}])
				.paginate('div.pagination a@href')
				.limit(10)(function (err, data) {
					if (err) logger.error(err);
					// logger.info(data);
					for (var i in data) {
						data[i].source = 'elle';
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
			// console.dir(result);
			result = _.flattenDeep(result);
			result = _.uniqBy(result, 'url');

			end(null, result);

		});
	}
}