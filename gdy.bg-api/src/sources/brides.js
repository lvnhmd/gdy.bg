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

        function getCompetitions(done) {
            x('http://www.bridesmagazine.co.uk/latest/win-save-book', 'div.tile', [{
                url: 'a@href',
                img: 'img@data-srcsizedata',
                title: 'h1'
            }])(function (err, data) {
                if (err) logger.error(err);

                data = _.filter(data, function (c) {
                    return new RegExp("\\bwin\\b").test(c.title.toLowerCase());
                });

                for (var i in data) {

                    data[i].url = data[i].url;

                    var splits = _.split(data[i].img, ',');
                    
                    // iterate over splits 
                    // find width > 600
                    // take the the next url
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
                    data[i].source = 'brides';
                    data[i].title = _.trim(data[i].title);

                    helper.setDefaultClosingDate(data[i]);

                }

                data = _.uniqBy(data, 'url');

                done(null, data);

            });
        };

        var tasks = [];

        tasks.push(function (done) {
            getCompetitions(done);
        });

        // async.series(tasks, function (err, result) {
        // 	if (err) logger.error(err);
        // 	result = _.flattenDeep(result);

        // 	var tasks = [];
        // 	for (var i in result) {

        // 		if (result[i]) {
        // 			(function (comp) {
        // 				tasks.push(function (done) {
        // 					getCompetitionClosingDate(comp, done);
        // 				});
        // 			})(result[i]);
        // 		}
        // 	}

        async.series(tasks, function (err, result) {
            if (err) logger.error(err);
            result = _.flattenDeep(result);
            // remove any duplicates
            result = _.uniqBy(result, 'url');

            logger.info('result ', result);
            end(null, result);
        });
        // });
    }
};
