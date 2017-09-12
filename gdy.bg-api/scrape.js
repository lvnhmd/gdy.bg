'use strict';

const api = require('./src/api.js');
const scraper = require('./src/scraper.js');

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


scraper.scrape();
