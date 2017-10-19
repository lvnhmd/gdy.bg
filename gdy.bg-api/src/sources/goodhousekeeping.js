/*jslint node: true */
'use strict';

var _ = require('lodash');
var helper = require('./helper');
var logger = require('../logger');

module.exports.getCompetitionClosingDate = function (sConf, comp, done) {

	var match = new RegExp(sConf.extractDateRegex).exec(comp.ends);
	if (null != match) {
		var splits = _.split(match[0], '-');
		var cd = splits[0].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[1])
			+ '/' + splits[2];
		helper.setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
	}
	done(null, comp);
};