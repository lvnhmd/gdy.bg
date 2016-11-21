/*jslint node: true */
'use strict';
var http = require('http');
var Competition = require('../models/competition');
var SourceMeta = require('../models/sourcemeta');
var Xray = require('x-ray');
var x = Xray();
var _ = require('lodash');
// var util = require('../../util.js');
// var moment = require('moment');
// var Validation = require('../../models/validation');

module.exports = {

	get: function(_host, _path, callback) {
		// console.log('get ' + _host + _path);
		return http.get({
			host: _host,
			path: _path
		}, function(response) {

			// Continuously update stream with data
			var body = '';
			response.on('data', function(d) {
				body += d;
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

	persistSource: function(sourceName, xOptions, done) {

		x(xOptions.url, xOptions.scope, [
			xOptions.selector
		])(function(err, links) {

			// <link rel="shortcut icon" href="/assets/img/stylist/meta/6b25e2b7f02f0dd5a43a88c3cb929267/favicon.ico">
			if (err) console.log(err);

			var filtered = _.filter(links, function(link) {
				return link.match('favicon');
			});

			//after saving into db call done 

			var meta = new SourceMeta({
				name: sourceName,
				favicon: (filtered[0]) ? filtered[0] : ''
			});

			meta.save( function(err, doc) {
				if (err) console.log(err);
				done(null, 'source ' + sourceName + ' updated');
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
				// 	if (err) console.log(err);
					// var ipp = +i + 1;
					// if (result) {
					// 	if (ipp == comps.length) {
					// 		done(null, 'save competitions done', validation);
					// 	}
					// } else {
						var comp = new Competition();
						comp.uri = comps[i].url;
						comp.img = comps[i].img;
						comp.title = comps[i].title;
						comp.source = comps[i].source;
						comp.closes = comps[i].closes;
						// newComp.id = newComp._id;

						// console.log('add new competition ' + newComp.url);

						// if (!newComp.url || !newComp.img || !newComp.title || !newComp.source || !newComp.closes) {
						// 	validation.push(newComp);
						// 	newComp.show = false;
						// }

						comp.save({
						    overwrite : false
						  },function(err) {
							if (err) console.log(err);

							// convert i to number 
							var ipp = +i + 1;
							if (ipp == comps.length) {
								// done(null, comps[0].source + ' competitions persisted', validation);
								done(null, comps[0].source + ' competitions persisted', null);
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
	// 				if (err) console.log(err);

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