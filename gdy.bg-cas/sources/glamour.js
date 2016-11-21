/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var utf8 = require('utf8');
var helper = require('./helper');
var util = require('../../util.js');
var async = require("async");
var moment = require('moment');

module.exports = {

	meta: function(done) {
		var xOptions = {
			url: 'http://www.glamourmagazine.co.uk',
			scope: 'link',
			selector: '@href'

		};
		helper.persistSource('glamour', xOptions, done);
	},

	xray: function(end) {

		var x = Xray();

		var done = function(err, result) {
			if (err) console.log(err);
			console.log(result);
		};

		function getCompetitionClosingDate(comp, done) {
			x(comp.url, 'div.copy')(function(err, copy) {
				if (err) console.log(err);

				if (copy) {
					var startI = copy.indexOf('closes on') + 'closes on '.length;
					var endI = copy.indexOf('. For full terms');

					var date = copy.substring(startI, endI).split(' ');
					var day = date[0];
					var month = 'January___February__March_____April_____May_______June______July______August____September_October___November__D‌​ecember__'.indexOf(date[1]) / 10 + 1;
					var year = date[2];

					comp.closes = moment(day + '/' + month + '/' + year, 'DD/MM/YYYY').add(1, 'days');

				}
				done(null, comp);
			});
		};

		function getCompetitions(done) {
			x('http://www.glamourmagazine.co.uk/competitions', 'li.article2', [{
					url: 'h1 a@href',
					img: 'img.articleImage@src',
					title: 'h1 a@title'
				}])
				.paginate('li.next a@href')
				.limit(10)(function(err, data) {
					if (err) console.log(err);
					for (var i in data) {
						// substring(0, closes.length - 4) + closes.substring(closes.length - 2, closes.length);
						data[i].title = data[i].title.substring(0, data[i].title.indexOf(' on GLAMOUR.com (UK)'));
						data[i].source = 'glamour';
					}

					done(null, data);

				});
		};


		var tasks = [];

		tasks.push(function(done) {
			getCompetitions(done);
		});

		async.series(tasks, function(err, results) {
			if (err) console.log(error);

			results = _.flattenDeep(results);

			var tasks = [];
			for (var i in results) {
				if (results[i]) {
					(function(comp) {
						tasks.push(function(done) {
							getCompetitionClosingDate(comp, done);
						});
					})(results[i]);
				}
			}

			async.series(tasks, function(err, results) {
				if (err) console.log(error);

				// remove any duplicates
				results = _.uniqBy(results, 'url');

				end(null, results ,'glamour xray done');

			});
		});
	}
}