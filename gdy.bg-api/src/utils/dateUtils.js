/*jslint node: true */
'use strict';
var _ = require('lodash');
var logger = require('../logger');
var moment = require('moment');
var httpUtils = require('./httpUtils');

var setClosingDate = module.exports.setClosingDate = function (date_regex, comp, dateStr) {

    if (dateStr.match(date_regex)) {
        var date = dateStr.match(date_regex)[0];
        var format = date.search(/\d{4}/) > -1 ? 'DD/MM/YYYY' : 'DD/MM/YY';

        comp.date = date;
        // count the current day, add(1,'days')
        var closesByDate = moment(date, format).add(1, 'days').toDate();
        comp.closesByDate = closesByDate;
        comp.ttl = (+closesByDate) / 1000;
    }
    else {
        setDefaultClosingDate(comp);
    }
}

var setDefaultClosingDate = module.exports.setDefaultClosingDate = function (comp) {
    var d = new Date();
    var day = d.getDate() + '';
    var month = d.getMonth() + 1 + '';
    var date = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

    comp.date = date;
    // count the current day, add(1,'days')
    var closesByDate = moment(date, 'DD/MM/YYYY').add(1, 'days').toDate();
    comp.closesByDate = closesByDate;
    comp.ttl = (+closesByDate) / 1000;
}

// set a future closing date for ten years from now becasue the magazines are slow to 
// update their web pages - I do not want to be scraping and persisting the same expired 
// competitions again and again
var setFutureClosingDate = module.exports.setClosingDateToYesterday = function (comp) {
    var d = new Date();
    var day = d.getDate() + '';
    var month = d.getMonth() + 1 + '';
    var date = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

    comp.date = date;
    // count the current day, add(1,'days')
    var closesByDate = moment(date, 'DD/MM/YYYY').add(10, 'years').toDate();
    comp.closesByDate = closesByDate;
    comp.ttl = (+closesByDate) / 1000;
}

var getMonthFromString = module.exports.getMonthFromString = function (str) {

    var d = Date.parse(str + "1, 2012");
    if (!isNaN(d)) {
        return new Date(d).getMonth() + 1;
    }
    return -1;
}

module.exports.getCompetitionClosingDate = function (url, sConf, comp, done) {

    if (typeof url === 'undefined') done(null, comp);
    else {
        httpUtils.getAsString(url, function (err, content) {
            if (content.indexOf('closed') > -1) {
                setFutureClosingDate(comp);
                comp.show = false;
                done(null, comp);
            }
            else {

                var match = new RegExp(sConf.extractDateRegex).exec(content);

                if (null != match) {

                    match[0] = match[0].replace(/&nbsp;/g, ' ');
                    var splits = _.split(match[0], ' ');

                    var cd;

                    if (comp.source === 'cntraveller') {
                        cd = splits[2].replace(/\D/g, '')
                            + '/' + getMonthFromString(splits[3])
                            + '/' + splits[4];
                    }
                    else if (comp.source === 'glamour') {
                        cd = splits[0].replace(/\D/g, '')
                            + '/' + getMonthFromString(splits[1])
                            + '/' + splits[2];
                    }

                    setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
                }
                done(null, comp);
            }
        });
    }
};


