/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

    meta: function () {

        var xOptions = {
            url: 'http://www.stylist.co.uk',
            scope: 'link',
            selector: '@href'

        };

        helper.persistSource('stylist', xOptions);

    },

    xray: function (end) {

        var x = Xray();
        var date_regex = /(?:\d{1}|\d{2})\/(?:\d{1}|\d{2})\/(?:\d{4}|\d{2})/;

        var done = function (err, result) {
            if (err) logger.error(err);
            logger.info(result);
        };

        function getCompetitionClosingDate(comp, done) {

            var setDefaultClosingDate = function (comp) {
                var d = new Date();
                var day = d.getDate() + '';
                var month = d.getMonth() + 1 + '';
                var date = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

                comp.date = date;
                // count the current day, add(1,'days')
                var closesByDate = moment(date, 'DD/MM/YYYY').add(1, 'days').toDate();
                comp.closesByDate = closesByDate;
                comp.ttl = (+closesByDate) / 1000;
                // calculate days between now and closesByDate
                // moment loses a day, add it back 
                comp.daysToEnter = moment(closesByDate).diff(moment(new Date()), 'days') + 1;
            };

            x(comp.url, ['em'])(function (err, em) {
                if (err) logger.error(err);

                var i = helper.containsRegex(em, date_regex);
                if (em && i > -1) {
                    helper.setClosingDate(date_regex, comp, em[i]);
                    done(null, comp);
                }
                else {
                    x(comp.url, 'div.widget script@src')(function (err, embedURL) {
                        if (err) logger.error(err);

                        if (typeof embedURL !== 'undefined') {
                            // logger.info(' >>> FOLLOW embedURL ', embedURL);
                            helper.getAsString(embedURL,
                                function (err, embedURLContent) {
                                    if (err) logger.error(err);

                                    var regexp = /remotePage = \'(.*?)\';/g;
                                    var match = regexp.exec(embedURLContent);
                                    var remotePage;

                                    if (null != match) {
                                        remotePage = match[1];
                                    }

                                    if (typeof remotePage !== 'undefined') {
                                        // logger.info(' >>> FOLLOW remotePage ', remotePage);
                                        x(remotePage, 'label a@href')(function (err, tcURL) {
                                            if (err) logger.error(err);

                                            if (typeof tcURL !== 'undefined') {
                                                // logger.info(' >>> FOLLOW tcURL ', tcURL);
                                                 
                                                helper.getAsString(tcURL, function (err, tcURLContent) {

                                                    var match = date_regex.exec(tcURLContent);

                                                    if (null != match) {

                                                        // logger.info(' >>> EXTRACT CLOSING DATE ', match[0]);

                                                        helper.setClosingDate(date_regex, comp, match[0]);
                                                        done(null, comp);
                                                    }
                                                    else {
                                                        setDefaultClosingDate(comp);
                                                        done(null, comp);
                                                    }
                                                });
                                            }
                                            else {
                                                setDefaultClosingDate(comp);
                                                done(null, comp);

                                            }
                                        });
                                    }
                                    else {
                                        setDefaultClosingDate(comp);
                                        done(null, comp);
                                    }

                                }
                            );
                        }
                        else {
                            setDefaultClosingDate(comp);
                            done(null, comp);
                        }
                    });
                }
            });
        };

        function getCompetitions(json, done) {
            x(json, 'article', [{
                url: 'a@href',
                img: 'img@srcset',
                title: 'h2'
            }])(function (err, data) {
                if (err) logger.error(err);

                for (var i in data) {

                    //prepend the url with the domain
                    data[i].url = 'http://www.stylist.co.uk' + data[i].url;
                    //get the image one before last
                    var imgs = _.split(data[i].img, ' ');
                    data[i].img = imgs[imgs.length - 2];
                    data[i].source = 'stylist';

                    var words = _.split(data[i].title, ' ');
                    var title = '';
                    for (var j in words) {
                        var word = words[j];

                        if (/^[A-Z]/.test(word)) {
                            word = word.charAt(0) + word.substr(1, word.length).toLowerCase();
                        }

                        title += word + ' ';
                    }

                    data[i].title = title;

                }

                done(null, data);

            });
        };

        function getWidgetJson(id, done) {
            helper.get('www.stylist.co.uk',
                '/api/widgets/win?ids=' + id,
                function (err, json) {
                    if (err) logger.error(err);
                    done(null, json);
                }
            );
        };


        x('http://www.stylist.co.uk/win', 'div.widget__wrapper', [
            '@data-widget-id'
        ])(function getWidgetIds(err, ids) {
            if (err) logger.error(err);

            // call the api endpoints one by one and collect the result
            // apiCalls = ids.length;
            var tasks = [];
            for (var i in ids) {

                (function (id) {
                    tasks.push(function (done) {
                        getWidgetJson(id, done);
                    });
                })(ids[i]);
            }

            async.series(tasks, function (err, result) {
                if (err) logger.error(err);
                // result is array of arrays, flatten it
                result = _.flattenDeep(result);

                var tasks = [];
                for (var i in result) {

                    if (result[i]) {
                        (function (json) {
                            tasks.push(function (done) {
                                getCompetitions(json, done);
                            });
                        })(result[i].rendered);
                    }
                }

                async.series(tasks, function (err, result) {
                    if (err) logger.error(err);
                    result = _.flattenDeep(result);

                    var tasks = [];
                    for (var i in result) {

                        if (result[i]) {
                            (function (comp) {
                                tasks.push(function (done) {
                                    getCompetitionClosingDate(comp, done);
                                });
                            })(result[i]);
                        }
                    }

                    async.series(tasks, function (err, result) {
                        if (err) logger.error(err);
                        // remove any duplicates
                        result = _.uniqBy(result, 'url');
                        // remove any with daysToEnter < 0
                        _.remove(result, function (c) {
                            return c.daysToEnter < 0;
                        });
                        end(null, result);
                    });
                });
            });
        });
    }
}
