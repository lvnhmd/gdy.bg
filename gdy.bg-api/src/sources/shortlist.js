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
		var date_regex = /(?:\d{1}|\d{2})\/(?:\d{1}|\d{2})\/(?:\d{4}|\d{2})/;

		var done = function (err, result) {
			if (err) logger.error(err);
			logger.info(result);
		};

		function getCompetitionClosingDate(comp, done) {

			x(comp.url, ['em'])(function (err, em) {
				if (err) logger.error(err);

				var i = helper.containsRegex(em, date_regex);
				if (em && i > -1) {
					helper.setClosingDate(date_regex, comp, em[i]);
					done(null, comp);
				}
				else {

					x(comp.url, ['i'])(function (err, it) {
						if (err) logger.error(err);

						var i = helper.containsRegex(it, date_regex);
						if (it && i > -1) {
							helper.setClosingDate(date_regex, comp, it[i]);
							done(null, comp);
						}

						else {

							helper.getAsString(comp.url, function (err, compURLContent) {

								// 25\/09\/17
								var dr = /\d{2}\\\/\d{2}\\\/(?:\d{4}|\d{2})/;

								var match = dr.exec(compURLContent);

								if (null != match) {

									var d = match[0].replace(/\\\//g, "/");

									helper.setClosingDate(date_regex, comp, d);
									done(null, comp);
								}
								else {
									helper.setDefaultClosingDate(comp);
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
				end(null, result);
			});
		});

	}
}
