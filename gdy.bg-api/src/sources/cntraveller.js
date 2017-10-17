/*jslint node: true */
'use strict';

let Xray = require('x-ray');
let _ = require('lodash');
let helper = require('./helper');
let moment = require('moment');
let logger = require('../logger');

let x = Xray();

module.exports.paginate = function (xOpts, end) {

    x(xOpts.url, xOpts.selector)
        (function (err, lastPageURL) {
            if (err) logger.error(err);

            var limit = 1;
            if (lastPageURL)
                limit = lastPageURL.substr(lastPageURL.length - 5, 1);
            end(null, limit);
        });
}

module.exports.getCompetitionClosingDate = function (sConf, comp, done) {

    helper.getAsString(comp.url, function (err, content) {

        if (content.indexOf('closed') > -1) {
            helper.setClosingDateToYesterday(comp);
            done(null, comp);
        }
        else {

            var match = new RegExp(sConf.extractDateRegex).exec(content);

            if (null != match) {

                match[0] = match[0].replace(/&nbsp;/g, ' ');

                var splits = _.split(match[0], ' ');
                var cd = splits[2].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[3]) + '/' + splits[4];

                helper.setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
                done(null, comp);
            }
            else {
                helper.setDefaultClosingDate(comp);
                done(null, comp);
            }
        }
    });

};

module.exports.getCompetitionImg = function (comp, done) {
    x(comp.url, '.competition', 'img@src')(function (err, img) {
        if (err) logger.error(err);
        comp.img = img;
        done(null, comp);
    });
};