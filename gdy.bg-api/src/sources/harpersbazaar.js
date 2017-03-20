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
			url: 'http://www.harpersbazaar.co.uk/',
			scope: 'link',
			selector: '@href'
		};
		helper.persistSource('harpersbazaar', xOptions, done);
	},

	xray: function(end) {

		var x = Xray();
		var done = function(err, result) {
			if (err) console.log(err);
			console.log(result);
		};


		function getCompetition(url, done) {
			console.log('GET ' + url);
			x(url, {
				img: ['div.embedded-image--inner img@data-img320'],
				title: 'h1',
				closed: 'div.standard-article-body--text'
			})(function(err, data) {
				if (err) console.log(err);

				data.url = url;
				data.img = data.img[0];
				data.source = 'harpersbazaar';

				done(null, data);

			});
		};

		x('http://www.harpersbazaar.co.uk/culture/competitions/', ['a@href'])(function(err, results) {
			if (err) console.log(err);

			var filtered = _.filter(results, function(link) {
				return link.startsWith('http://www.harpersbazaar.co.uk/culture/competitions/news');
				// link.match('http://www.harpersbazaar.co.uk/culture/competitions/');
			});
			filtered = _.uniq(filtered);

			var tasks = [];

			for (var i in filtered) {

				if (filtered[i]) {
					(function(url) {
						tasks.push(function(done) {
							getCompetition(url, done);
						});
					})(filtered[i]);
				}
			}

			async.series(tasks, function(err, results) {

				results = _.remove(results, function(comp) {
					return comp.closed.indexOf('THIS COMPETITION IS NOW CLOSED') == -1;
				});

				end(null, results, 'harpersbazaar xray done');
				
			});

		});
	}
};