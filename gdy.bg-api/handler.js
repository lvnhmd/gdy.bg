'use strict';

const api = require('./src/api.js');
const scraper = require('./src/scraper.js');
const utils = require('./src/utils.js');

function cbw(cb) {
    return function (err, res) {
        if (err) {
            cb(err);
        } else {
            if (typeof res === 'object' && res.hasOwnProperty('body')) {
                cb(null, res.body);
            } else {
                cb(null, {});
            }
        }
    };
}


module.exports.getSources = (event, context, cb) => api.getSources(event, cbw(cb));

module.exports.getCompetitions = (event, context, cb) => api.getCompetitions(event, cbw(cb));

module.exports.scrape = (event, context, cb) => scraper.scrape();

module.exports.postUser = (event, context, cb) => api.postUser(event, cbw(cb));

module.exports.trackEntry = (event, context, cb) => api.trackEntry(event, cbw(cb));

module.exports.updateClosesByDate = (event, context, cb) => utils.updateClosesByDate(event);
