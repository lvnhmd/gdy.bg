/*jslint node: true */
'use strict';

let Xray = require('x-ray');
let _ = require('lodash');
let helper = require('./helper');
let moment = require('moment');
let logger = require('../logger');

let x = Xray();

module.exports.getCompetitionClosingDate = function (sConf, comp, done) {

    helper.setDefaultClosingDate(comp);

    x(comp.url, 'iframe@src')(function (err, iSrc) {
        if (err) logger.error(err);

        if (typeof iSrc !== 'undefined') {

            helper.getAsString(iSrc, function (err, iframeContent) {

                var match = new RegExp(sConf.extractDateRegex).exec(iframeContent);
                if (null != match) {
                    var splits = _.split(match[0], ' ');
                    var cd = splits[0].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[1]) + '/' + splits[2];
                    helper.setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
                }
                done(null, comp);
            });

        }
        else {
            done(null, comp);
        }
    });
};

