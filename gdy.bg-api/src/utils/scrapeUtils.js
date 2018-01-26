/*jslint node: true */
'use strict';
var Xray = require('x-ray');
var x = Xray();
var _ = require('lodash');
var logger = require('../logger');
var dateUtils = require('./dateUtils');
var sanitiseUtils = require('./sanitiseUtils');
var httpUtils = require('./httpUtils');

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
            logger.info('DATA ', data);
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
                sanitiseUtils.titleToLowerCase(data[i]);
            }

            data = _.uniqBy(data, 'url');
            // logger.info('DATA ', data);
            done(null, data);

        });
}

module.exports.parseJson = function (conf, xOpts, done) {

    httpUtils.getAsString(xOpts.url, function (err, content) {
        var regexp = /window.__ASYNC_PROPS__ = \[{\"data\":\[(.*)\]}\]<\/script>/i;
        if (content.indexOf('window.__ASYNC_PROPS__ = ') > -1) {
            var match = regexp.exec(content);
            var json = JSON.parse(match[1]);
            var data = [];
            for (var i = 0; i < json.acf.widgets.length; i++) {

                if (typeof json.acf.widgets[i].posts !== 'undefined') {
                    logger.info('-------------------------------');
                    logger.info(json.acf.widgets[i].posts);
                    logger.info('-------------------------------');
                    for (var j = 0; j < json.acf.widgets[i].posts.length; j++) {

                        var comp = {};
                        var url = json.acf.widgets[i].posts[j].link;
                        if (typeof json.acf.widgets[i].posts[j].acf.category.name !== 'undefined' &&
                            (json.acf.widgets[i].posts[j].acf.category.name.toLowerCase() == 'win' ||
                                json.acf.widgets[i].posts[j].acf.category.name.toLowerCase().indexOf('comp') > -1)) {
                            comp.url = url.startsWith('http') ? url : conf.urlPrefix + url;
                            comp.img = json.acf.widgets[i].posts[j].acf.hero_images[0].url;
                            comp.source = conf.name.toLowerCase();
                            comp.title = _.trim(json.acf.widgets[i].posts[j].title.rendered).replace(/\r?\n|\r/g, '').substr(0, 95);

                            eval(conf.sanitiseData);

                            dateUtils.setDefaultClosingDate(comp, 1, 'days');
                            sanitiseUtils.titleToLowerCase(comp);

                            data.push(comp);

                            // for each of the competitions invoke 
                            // https://api.parsely.com/v2/related?apikey=stylist.co.uk&boost=views&limit=10
                            // &sort=score&pub_date_start=7d&page=1
                            // &url=https%3A%2F%2Fwww.stylist.co.uk%2Fwin%2Fwin-a-vintage-drinks-trolley-and-25-gift-card-for-bills-glamcake-day%2F183638
                        }
                    }
                }
            }

            data = _.uniqBy(data, 'url');
            logger.info('DATA ', data);
            done(null, data);

        }
    });
}


