'use strict';

const api = require('./src/api.js');
const utils = require('./src/utils.js');
const Crawler = require('./src/crawler.js');

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

module.exports.crawlStylist = function (event, context, cb) {
    Crawler.crawl(event, cb);
}

module.exports.crawlShortlist = function (event, context, cb) {
    Crawler.crawl(event, cb);
}

module.exports.crawlMrhyde = function (event, context, cb) {
    Crawler.crawl(event, cb);
}

module.exports.postUser = (event, context, cb) => api.postUser(event, cbw(cb));

module.exports.trackEntry = (event, context, cb) => api.trackEntry(event, cbw(cb));

module.exports.updateClosesByDate = (event, context, cb) => utils.updateClosesByDate(event);

module.exports.newsletterSignup = (event, context, cb) => api.newsletterSignup(event, cbw(cb));
