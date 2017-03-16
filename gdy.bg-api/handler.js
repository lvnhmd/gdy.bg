'use strict';

const api = require('./api.js');

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


// module.exports.getSources = (event, context, cb) => api.getSources({
//     parameters: {
//         limit: event.query.limit,
//         next: event.query.next
//     }
// }, cbw(cb));

module.exports.getSources = (event, context, cb) => api.getSources(event, cbw(cb));

module.exports.getCompetitions = (event, context, cb) => api.getCompetitions(event, cbw(cb));