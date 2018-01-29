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
        setDefaultClosingDate(comp, 1, 'days');
    }
}

var setDefaultClosingDate = module.exports.setDefaultClosingDate = function (comp, amount, measure) {
    var d = new Date();
    var day = d.getDate() + '';
    var month = d.getMonth() + 1 + '';
    var date = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

    comp.date = date;
    // count the current day, add(1,'days')
    var closesByDate = moment(date, 'DD/MM/YYYY').add(amount, measure).toDate();
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
            // logger.info('URL ', url);
            // logger.info('CONTENT ', content);
            // set a future closing date for ten years from now becasue the magazines are slow to 
            // update their web pages - I do not want to be scraping and persisting the same expired 
            // competitions again and again
            if (content.indexOf('closed') > -1
                && comp.source !== 'stylist'
                && comp.source !== 'shortlist'
                && comp.source !== 'emeraldstreet'
                && comp.source !== 'mrhyde'
                && comp.source !== 'idealhome') {
                setDefaultClosingDate(comp, 10, 'years');
                comp.show = false;
                done(null, comp);
            }
            else {
                if (comp.source === 'goodhousekeeping'
                    || comp.source === 'idealhome') {
                    content = comp.ends;
                    if (content.indexOf('Runsuntilwon') > -1) {
                        setDefaultClosingDate(comp, 30, 'days');
                    }
                }
                else if (comp.source === 'emeraldstreet'
                    || comp.source === 'mrhyde') {
                    // emeraldstreet and mrhyde do not have closing dates actually 
                    setDefaultClosingDate(comp, 7, 'days');
                }
                var match = new RegExp(sConf.extractDateRegex).exec(content);

                if (null != match) {

                    match[0] = match[0].replace(/&nbsp;/g, ' ');

                    if (comp.source === 'cntraveller') {
                        var splits = _.split(match[0], ' ');
                        var cd = splits[2].replace(/\D/g, '')
                            + '/' + getMonthFromString(splits[3])
                            + '/' + splits[4];
                        setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
                    }
                    else if (comp.source === 'glamour') {
                        var splits = _.split(match[0], ' ');
                        var cd = splits[0].replace(/\D/g, '')
                            + '/' + getMonthFromString(splits[1])
                            + '/' + splits[2];
                        setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
                    }
                    else if (comp.source === 'goodhousekeeping'
                        || comp.source === 'idealhome') {
                        var splits = _.split(match[0], '-');
                        var cd = splits[0].replace(/\D/g, '')
                            + '/' + (comp.source === 'idealhome' ? splits[1] : getMonthFromString(splits[1]))
                            + '/' + splits[2];
                        // console.log('>>> DATE ', cd);
                        setClosingDate(new RegExp(sConf.dateRegex), comp, cd);
                    }
                    else if (comp.source === 'prima') {
                        // logger.info('MATCH ', match[0]);
                        var splits = _.split(match[0], ' ');
                        // logger.info('SPLIT ', +splits[0]);
                        // as prima does not have closing date but days left instead,
                        // extract the days , add them to the current date and construct cd 
                        setDefaultClosingDate(comp, +splits[0], 'days');
                        // logger.info('AFTER ', comp);
                    }
                    else if (comp.source === 'stylist' || comp.source === 'shortlist') {
                        // logger.info('stylist match ', match[0]);
                        var splits = _.split(match[0], ' ');
                        // if (comp.source === 'stylist')
                        //     logger.info('stylist date ', splits[4]);
                        // if (comp.source === 'shortlist')
                        //     logger.info('shortlist date ', splits[4]);
                        setClosingDate(new RegExp(sConf.dateRegex), comp, splits[4]);
                    }


                }
                done(null, comp);
            }
        });
    }
};


