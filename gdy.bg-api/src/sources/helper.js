/*jslint node: true */
'use strict';
var http = require('http');
var https = require('https');
var Competition = require('../models/competition');
var Source = require('../models/source');
var Xray = require('x-ray');
var x = Xray();
var _ = require('lodash');
var logger = require('../logger');
var moment = require('moment');

var AWS = require('aws-sdk');
// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var s3 = new AWS.S3();
const uuidv5 = require('uuid/v5');

module.exports = {

    get: function (_host, _path, callback) {

        return http.get({
            host: _host,
            path: _path
        }, function (response) {

            // Continuously update stream with data
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {

                // Data reception is done, do whatever with it!
                var parsed = {};
                try {
                    parsed = JSON.parse(body);
                } catch (e) {
                    return callback('can not get ' + _host + _path, null);
                }

                return callback(null, parsed);
            });
        });

    },

    getAsString: function (url, callback) {

        var responseFunction = function (response) {

            // Continuously update stream with data
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {

                // var parsed = {};
                // try {
                //     parsed = JSON.parse(body);
                // } catch (e) {
                //     return callback('can not get ' + _host + _path, null);
                // }

                return callback(null, body);
            });
        };

        if (url.startsWith('https')) {
            return https.get(url, responseFunction);
        }
        else {
            return http.get(url, responseFunction);
        }

    },

    persistSource: function (source, xOptions) {

        x(xOptions.url, xOptions.scope, [
            xOptions.selector
        ])(function (err, links) {

            // logger.info('>LINKS ' , links);

            links = _.compact(links);
            // logger.info('links', links);

            if (err) logger.error(err);

            var filtered = _.filter(links, function (link) {
                return link.match('favicon');
            });

            var meta = new Source({
                name: source,
                favicon: (filtered[0]) ? filtered[0] : 'favicon'
            });

            meta.save(function (err, doc) {
                if (err) logger.error(err);
                logger.info('PERSIST SOURCE ', doc.attrs);
            });

        });

    },

    persistCompetitions: function (comps, done) {

        for (var index in comps) {

            (function (i) {

                var img = comps[i].img;

                var regexp = /([A-Z0-9_-]{1,}\.(?:png|jpg|gif|jpeg))/i;
                var match = regexp.exec(img);
                var iName;

                if (null != match) {
                    iName = match[1];
                }

                var key = uuidv5(img, uuidv5.URL) + '-' + iName;
                // logger.info('will write [', img, '] to s3 as [', key, ']');

                var andUploadToS3 = function (res) {
                    res.setEncoding('binary');
                    var body = '';
                    res.on('data', function (chunk) {
                        // Agregates chunks
                        body += chunk;
                    });
                    res.on('end', function () {
                        // Once you received all chunks, send to S3
                        var params = {
                            Bucket: 'swagbag.club-images',
                            Key: key,
                            Body: new Buffer(body, 'binary'),
                            ACL: 'public-read'
                        };
                        s3.putObject(params, function (err, data) {

                            // logger.info('s3.putObject ', params);

                            if (err) {
                                logger.info('s3.putObject errored');
                                logger.error(err);
                            } else {

                                // logger.info('closesByDate : ', comps[i].url + ' : ' + comps[i].closesByDate);

                                var comp = {
                                    uri: comps[i].url,
                                    title: _.trim(comps[i].title).replace(/\r?\n|\r/g, '').substr(0, 95),
                                    source: comps[i].source,
                                    closesByDate: comps[i].closesByDate,
                                    ttl: comps[i].ttl,
                                    daysToEnter: comps[i].daysToEnter,
                                    date: comps[i].date,
                                    img: "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/" + key
                                };

                                Competition.get(comp.uri, function (err, existingComp) {
                                    if (err) logger.error(err);
                                    else if (existingComp) {
                                        logger.info('Comp exist ', existingComp.attrs.uri);
                                        // I do not think there is value in updating existing competitions
                                        // overwrites my changes 
                                        // comp.show = existingComp.attrs.show;
                                        // Competition.update(comp, function (err, c) {
                                        //     if (err) logger.error(err);
                                        //     logger.info('Updated : ', c.attrs);
                                        // });

                                    } else {
                                        Competition.create(comp,
                                            function (err, c) {
                                                if (err) logger.error(err);
                                                logger.info('Persisted : ', c.attrs);
                                            });
                                    }
                                    // convert i to number
                                    var ipp = +i + 1;
                                    if (ipp == comps.length) {
                                        done(null, comps[0].source + ' competitions persisted');
                                    }
                                });
                            }
                        });
                    });
                }

                if (img.startsWith('https'))
                    https.get(img, andUploadToS3);
                else http.get(img, andUploadToS3);
            })(index);
        }
    },

    containsRegex: function (a, regex) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].search(regex) > -1) {
                // logger.info('>HELPER ', a, ' contains ', regex);
                return i;
            }
        }
        return -1;
    },

    getMonthFromString: function (str) {

        var d = Date.parse(str + "1, 2012");
        if (!isNaN(d)) {
            return new Date(d).getMonth() + 1;
        }
        return -1;
    },

    setClosingDate: function (date_regex, comp, dateStr) {
        var date = dateStr.match(date_regex)[0];
        var format = date.search(/\d{4}/) > -1 ? 'DD/MM/YYYY' : 'DD/MM/YY';

        comp.date = date;
        // count the current day, add(1,'days')
        var closesByDate = moment(date, format).add(1, 'days').toDate();
        comp.closesByDate = closesByDate;
        comp.ttl = (+closesByDate) / 1000;
        // calculate days between now and closesByDate
        // moment loses a day, add it back 
        comp.daysToEnter = moment(closesByDate).diff(moment(new Date()), 'days') + 1;
    },

    setDefaultClosingDate: function (comp) {
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
    }

};
