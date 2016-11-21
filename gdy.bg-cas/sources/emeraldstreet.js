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
			url: 'http://www.emeraldstreet.com',
			scope: 'link',
			selector: '@href'
		};
		helper.persistSource('emeraldstreet', xOptions, done);
	},

	xray: function(end) {

		var x = Xray();
		var done = function(err, result) {
			if (err) console.log(err);
			console.log(result);
		};


		x('http://www.emeraldstreet.com/competitions', 'div.grid__item', [{
			url: 'a@href',
			img: 'div.grid__thumbnail img@src',
			title: 'h2'
		}])(function(err, results) {
			if (err) console.log(err);

			for (var i in results) {
				results[i].title = _.trim(results[i].title);
				results[i].title = _.trim(results[i].title, '\n');
				results[i].source = 'emeraldstreet';
			}

			results = _.uniqBy(results, 'url');

			end(null, results ,'emeraldstreet xray done');
			
		});
	}
};