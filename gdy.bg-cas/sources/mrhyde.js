/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var utf8 = require('utf8');
var helper = require('./helper');
var util = require('../../util.js');

module.exports = {

	meta: function(done) {
		var xOptions = {
			url: 'http://www.mrhyde.com',
			scope: 'link',
			selector: '@href'
		};
		helper.persistSource('mrhyde', xOptions, done);
	},

	xray: function(end) {

		var x = Xray();
		var done = function(err, result) {
			if (err) console.log(err);
			console.log(result);
		};


		x('http://www.mrhyde.com/competitions', 'div.grid__item', [{
			url: 'a@href',
			img: 'img@src',
			title: 'h3.grid__item__headline'
		}])(function(err, results) {
			if (err) console.log(err);

			for (var i in results) {
				results[i].title = _.trim(results[i].title);
				results[i].title = _.trim(results[i].title, '\n');
				results[i].source = 'mrhyde';
			}

			results = _.uniqBy(results, 'url');

			end(null, results, 'mrhyde xray done');

		});
	}
};