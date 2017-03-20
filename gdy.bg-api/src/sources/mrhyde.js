/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var utf8 = require('utf8');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

	meta: function() {
		var xOptions = {
			url: 'http://www.mrhyde.com',
			scope: 'link',
			selector: '@href'
		};
		helper.persistSource('mrhyde', xOptions);
	},

	xray: function(end) {

		var x = Xray();
		var done = function(err, result) {
			if (err) logger.error(err);
			logger.info(result);
		};


		x('http://www.mrhyde.com/competitions', 'div.grid__item', [{
			url: 'a@href',
			img: 'img@src',
			title: 'h3.grid__item__headline'
		}])(function(err, result) {
			if (err) logger.error(err);

			for (var i in result) {
				result[i].title = _.trim(result[i].title);
				result[i].title = _.trim(result[i].title, '\n');
				result[i].source = 'mrhyde';
			}

			result = _.uniqBy(result, 'url');

			end(null, result);

		});
	}
};