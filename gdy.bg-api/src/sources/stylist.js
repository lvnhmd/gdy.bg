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
        var date_regex = /\d{2}\/\d{2}\/(?:\d{4}|\d{2})/;

        var done = function (err, result) {
            if (err) logger.error(err);
            logger.info(result);
        };

        function getCompetitionClosingDate(comp, done) {

            x(comp.url, ['em'])(function (err, em) {
                if (err) logger.error(err);

                var d = new Date();
                var day = d.getDate() + '';
                var month = d.getMonth() + 1 + '';
                var date = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

                var format = 'DD/MM/YYYY';
                var i = helper.containsRegex(em, date_regex);
                if (em && i > -1) {
                    date = em[i].match(date_regex)[0];
                    format = date.search(/\d{4}/) > -1 ? 'DD/MM/YYYY' : 'DD/MM/YY';
                }

                comp.date = date;
                // count the current day, add(1,'days')
                var closesByDate = moment(date, format).add(1,'days').toDate();
                comp.closesByDate = closesByDate;
                comp.ttl = (+closesByDate) / 1000;
                // calculate days between now and closesByDate
                // moment loses a day, add it back 
                comp.daysToEnter = moment(closesByDate).diff(moment(new Date()), 'days') + 1;
                done(null, comp);
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
                if (err) logger.info(error);
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
                    if (err) logger.info(error);
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
                        if (err) logger.info(err);
                        // remove any duplicates
                        result = _.uniqBy(result, 'url');
                        // remove any with daysToEnter < 0
                        _.remove(result, function(c){
                            return c.daysToEnter < 0;
                        });
                        end(null, result);
                    });
                });
            });
        });
    }
}
