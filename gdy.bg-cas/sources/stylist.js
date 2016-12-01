/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
// var utf8 = require('utf8');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
// var util = require('../../util.js');
var logger = require('../logger');

module.exports = {

	meta: function(done,msg) {

		var xOptions = {
			url: 'http://www.stylist.co.uk',
			scope: 'link',
			selector: '@href'

		};

		helper.persistSource('stylist', xOptions, done, msg);

	},

	xray: function(end) {

		var x = Xray();
		var date_regex = /\d{2}\/\d{2}\/(?:\d{4}|\d{2})/;

		var done = function(err, result) {
			if (err) logger.error(err);
			logger.info(result);
		};

		function getCompetitionClosingDate(comp, done) {
			x(comp.url, ['em'])(function(err, em) {
				if (err) logger.error(err);

				if (em) {
					var i = helper.containsRegex(em, date_regex);
					if (i > -1) {
						var closes = em[i].match(date_regex)[0];
						// some of the competitions have 4 YYYY digits in closes by date
						if (closes.search(/\d{4}/) > -1) {
							closes = closes.substring(0, closes.length - 4) + closes.substring(closes.length - 2, closes.length);
						}
						// moment loses a day, add it back
						// comp.closes = (moment(closes, 'DD/MM/YY').add(1, 'days')).toISOString();
						comp.closes = moment(closes, 'DD/MM/YY').toISOString();
						logger.info(' comp.closes ' + comp.closes);
					}
				}
				done(null, comp);
			});
		};

		function getCompetitions(json, done) {
			x(json, 'article', [{
				url: 'a@href',
				img: 'img@srcset',
				title: 'h2'
			}])(function(err, data) {
				if (err) logger.error(err);

				for (var i in data) {

					//prepend the url with the domain
					data[i].url = 'http://www.stylist.co.uk' + data[i].url;
					//get the image one before last 
					var imgs = _.split(data[i].img, ' ');
					data[i].img = imgs[imgs.length - 2];
					data[i].source = 'stylist';
				}

				done(null, data);

			});
		};

		function getWidgetJson(id, done) {
			helper.get('www.stylist.co.uk',
				'/api/widgets/win?ids=' + id,
				function(err, json) {
					if (err) logger.error(err);
					done(null, json);
				}
			);
		};


		x('http://www.stylist.co.uk/win', 'div.widget__wrapper', [
			'@data-widget-id'
		])(function getWidgetIds(err, ids) {
			if (err) logger.error(err);

			// call the api endpoints one by one and collect the result 
			// apiCalls = ids.length;
			var tasks = [];
			for (var i in ids) {

				(function(id) {
					tasks.push(function(done) {
						getWidgetJson(id, done);
					});
				})(ids[i]);
			}

			async.series(tasks, function(err, results) {
				if (err) logger.info(error);
				// results is array of arrays, flatten it
				results = _.flattenDeep(results);

				var tasks = [];
				for (var i in results) {

					if (results[i]) {
						(function(json) {
							tasks.push(function(done) {
								getCompetitions(json, done);
							});
						})(results[i].rendered);
					}
				}

				async.series(tasks, function(err, results) {
					if (err) logger.info(error);
					results = _.flattenDeep(results);

					var tasks = [];
					for (var i in results) {
						logger.info(results[i].url);
						if (results[i]) {
							(function(comp) {
								tasks.push(function(done) {
									getCompetitionClosingDate(comp, done);
								});
							})(results[i]);
						}
					}

					async.series(tasks, function(err, results) {
						if (err) logger.info(error);

						//remove any duplicates
						results = _.uniqBy(results, 'url');

						end(null, results);

					});

				});


			});

		});
	}

}