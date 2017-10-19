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

            var limit = 1;
            if (lastPageURL)
                limit = lastPageURL.substr(lastPageURL.length - 5, 1);
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
                // apply each data filter 

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

                if (conf.name.toLowerCase() === 'glamour') {
                    var splits = _.split(data[i].img, ',');
                    data[i].img = _.split(splits[2].trim(), ' ')[0];
                }

                if (conf.name.toLowerCase() === 'brides') {
                    var splits = _.split(data[i].img, ',');
                    // iterate over splits, find width > 600  and take the the next url
                    var imgUrl = splits[splits.length - 1];
                    for (var s in splits) {
                        // '{"width":280',
                        if (splits[s].includes('width')) {
                            // extract as number
                            var width = +(/\d{3}/.exec(splits[s]));

                            if (width > 600) {
                                imgUrl = splits[+s + 2];
                            }
                        }
                    }
                    data[i].img = imgUrl.substring(imgUrl.indexOf('http'), imgUrl.lastIndexOf('\"'));
                }

                if (conf.name.toLowerCase() === 'goodhousekeeping') {
                    data[i].ends = _.trim(data[i].ends).replace(/\r?\n|\r/g, '').replace(/\s/g, '');
                }

                data[i].source = conf.name.toLowerCase();
                data[i].title = _.trim(data[i].title).replace(/\r?\n|\r/g, '').substr(0, 95);

                dateUtils.setDefaultClosingDate(data[i]);
            }

            data = _.uniqBy(data, 'url');
            // logger.info('DATA ', data);
            done(null, data);

        });
}

module.exports.getCompetitionImg = function (comp, done) {
    x(comp.url, '.competition', 'img@src')(function (err, img) {
        if (err) logger.error(err);
        comp.img = img;
        done(null, comp);
    });
};
