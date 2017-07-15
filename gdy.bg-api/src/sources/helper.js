/*jslint node: true */
'use strict';
var http = require('http');
var Competition = require('../models/competition');
var Source = require('../models/source');
var Xray = require('x-ray');
var x = Xray();
var _ = require('lodash');

var logger = require('../logger');

module.exports = {

    get: function(_host, _path, callback) {

        return http.get({
            host: _host,
            path: _path
        }, function(response) {

            // Continuously update stream with data
            var body = '';
            response.on('data', function(chunk) {
                body += chunk;
            });
            response.on('end', function() {

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

    persistSource: function(source, xOptions) {

        x(xOptions.url, xOptions.scope, [
            xOptions.selector
        ])(function(err, links) {

            // <link rel="shortcut icon" href="/assets/img/stylist/meta/6b25e2b7f02f0dd5a43a88c3cb929267/favicon.ico">
            if (err) logger.error(err);

            var filtered = _.filter(links, function(link) {
                return link.match('favicon');
            });

            var meta = new Source({
                name: source,
                favicon: (filtered[0]) ? filtered[0] : ''
            });

            meta.save(function(err, doc) {
                if (err) logger.error(err);
            });

        });

    },

    // TODO: change this to send me an email only when there are new competitions
    // else I ll end up getting email every time scraper scrapes

    persistCompetitions: function(comps, done) {

        var validation = [];

        for (var index in comps) {

            (function(i) {

                // Competition.findOne({
                // 	url: comps[i].url
                // }, function(err, result) {
                // 	if (err) console.logger(err);
                // var ipp = +i + 1;
                // if (result) {
                // 	if (ipp == comps.length) {
                // 		done(null, 'save competitions done', validation);
                // 	}
                // } else {

                var comp = new Competition({
                    uri: comps[i].url,
                    img: comps[i].img,
                    title: comps[i].title,
                    source: comps[i].source,
                    closesByDate: comps[i].closesByDate,
                    ttl: comps[i].ttl
                });

                // newComp.id = newComp._id;

                // logger.info('add new competition ' + newComp.url);

                // if (!newComp.url || !newComp.img || !newComp.title || !newComp.source || !newComp.closes) {
                // 	validation.push(newComp);
                // 	newComp.show = false;
                // }

                comp.update(function(err, doc) {
                    if (err) logger.error(err);

                    // convert i to number
                    var ipp = +i + 1;
                    if (ipp == comps.length) {
                        // done(null, comps[0].source + ' competitions persisted', validation);
                        done(null, comps[0].source + ' competitions persisted');
                    }
                });
                // }
                // });
            })(index);
        }
    },

    // persistValidation: function(validation, done) {

    // 	var casted = validation.map(function(comp) {
    // 		var vComp = new Validation();
    // 		vComp.comp = comp._id;
    // 		return vComp;
    // 	});

    // 	for (var index in casted) {
    // 		(function(i) {
    // 			var vComp = casted[i];
    // 			vComp.save(function(err) {
    // 				if (err) console.logger(err);

    // 				var ipp = +i + 1;
    // 				if (ipp == casted.length) {
    // 					done(null);
    // 				}
    // 			});
    // 		})(index);
    // 	}

    // },

    containsRegex: function(a, regex) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].search(regex) > -1) {
                return i;
            }
        }
        return -1;
    }

};
