/*jslint node: true */
'use strict';

var Xray = require('x-ray');
var _ = require('lodash');
var helper = require('./helper');
var async = require("async");
var moment = require('moment');
var logger = require('../logger');

module.exports = {

    xray: function (end) {

        var x = Xray();
        var find_date_regex = /closes.*(?:\d{1}|\d{2})([A-Za-z]*[ ]+)*\d{4}/;
        var date_regex = /(?:\d{1}|\d{2})\/(?:\d{1}|\d{2})\/(?:\d{4}|\d{2})/

        var done = function (err, result) {
            if (err) logger.error(err);
            logger.info(result);
        };

        function getCompetitionImg(comp, done) {

            x(comp.url, '.competition', 'img@src')(function (err, img) {
                if (err) logger.error(err);

                // logger.info(' >>> IMG ', img);

                comp.img = img;

                done(null, comp);


            });

        };

        function getCompetitionClosingDate(comp, done) {

            helper.getAsString(comp.url, function (err, content) {

                // logger.info('CONTENT |', content, '|');

                if (content.indexOf('closed') > -1) {
                    helper.setClosingDateToYesterday(comp);
                    done(null, comp);
                }
                else {

                    var match = find_date_regex.exec(content);

                    if (null != match) {

                        match[0] = match[0].replace(/&nbsp;/g, ' ');

                        logger.info(' >>> EXTRACT CLOSING DATE ', match[0]);

                        var splits = _.split(match[0], ' ');

                        var cd = splits[2].replace(/\D/g, '') + '/' + helper.getMonthFromString(splits[3]) + '/' + splits[4];
                        logger.info('Closing date ', cd);
                        helper.setClosingDate(date_regex, comp, cd);

                        done(null, comp);
                    }
                    else {
                        helper.setDefaultClosingDate(comp);
                        done(null, comp);
                    }
                }
            });

        };

        function getCompetitions(limit, done, scope) {
            x('http://www.cntraveller.com/news/competitions/', scope, [{
                url: 'a@href',
                img: 'img@src',
                title: 'h3'
            }])
                .paginate('a.nextPage@href')
                .limit(limit)
                (function (err, data) {
                    if (err) logger.error(err);

                    for (var i in data) {

                        data[i].url = data[i].url;
                        data[i].img = data[i].img;
                        data[i].source = 'cntraveller';
                        data[i].title = _.trim(data[i].title).replace(/\r?\n|\r/g, '');

                    }

                    data = _.uniqBy(data, 'url');

                    done(null, data);

                });
        };


        x('http://www.cntraveller.com/news/competitions/', '.pageCount')
            (function (err, lastPageURL) {
                if (err) logger.error(err);
                //the last character of lastPageURL will be the limit for pagination 
                //http://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
                // logger.info('>lastPageURL ', lastPageURL);
                var limit = 1;
                if (lastPageURL)
                    limit = lastPageURL.substr(lastPageURL.length - 5, 1);

                // logger.info('>PAGINATE ', +limit);
                var tasks = [];

                tasks.push(function (done) {
                    getCompetitions(limit, done, '.largeArticle');
                });

                tasks.push(function (done) {
                    getCompetitions(limit, done, '.smallArticle');
                });

                async.series(tasks, function (err, result) {
                    if (err) logger.error(err);

                    // logger.info('RESULT ', result)

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

                    for (var i in result) {

                        if (result[i]) {
                            (function (comp) {
                                tasks.push(function (done) {
                                    getCompetitionImg(comp, done);
                                });
                            })(result[i]);
                        }
                    }

                    async.series(tasks, function (err, result) {
                        if (err) logger.error(err);
                        // remove any duplicates
                        result = _.uniqBy(result, 'url');
                        end(null, result);
                    });
                });

            });
    }
}