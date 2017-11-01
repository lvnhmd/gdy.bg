/*jslint node: true */
'use strict';
var Xray = require('x-ray');
var x = Xray();
var _ = require('lodash');
var logger = require('../logger');
var dateUtils = require('./dateUtils');

module.exports.getLastPage = function (xOpts, done) {

    x(xOpts.url, xOpts.scope, xOpts.selector)
        (function (err, lastPageURL) {
            if (err) logger.error(err);
            var match = /\d+/.exec(lastPageURL);
            var limit = 1;
            if (lastPageURL) limit = +match[0];
            done(null, limit);
        });
}

module.exports.getCompetitions = function (conf, limit, xOpts, done) {

    x(xOpts.url, xOpts.selector, xOpts.format)
        .paginate(conf.pageSelector)
        .limit(limit)
        (function (err, data) {
            if (err) logger.error(err);

            if (conf.dataFilters.length > 0) {
                for (var i in conf.dataFilters) {
                    data = _.filter(data, function (c) {
                        return typeof c[conf.dataFilters[i].property] !== 'undefined'
                            && new RegExp(conf.dataFilters[i].regex)
                                .test(c[conf.dataFilters[i].property].toLowerCase());
                    });
                }
            }

            for (var i in data) {
                data[i].url = data[i].url;
                data[i].img = data[i].img;
                data[i].source = conf.name.toLowerCase();
                data[i].title = _.trim(data[i].title).replace(/\r?\n|\r/g, '').substr(0, 95);

                eval(conf.sanitiseData);

                dateUtils.setDefaultClosingDate(data[i], 1, 'days');
            }

            data = _.uniqBy(data, 'url');
            // logger.info('DATA ', data);
            done(null, data);

        });
}

