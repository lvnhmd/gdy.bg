var Competition = require('./models/competition');
var Source = require('./models/source');
var _ = require('lodash');

exports.getCompetitions = function (event, cb) {
    console.log("getCompetitions", JSON.stringify(event));

    Competition.scan()
        // can not use index with scan 
        // .usingIndex('daysToEnterIndex')
        // .ascending()
        .exec(function (err, data) {
            if (err) cb(err);
            var result = {
                body: _.orderBy(data.Items, function (c) { return c.daysToEnter }, ['asc'])
            };
            return cb(null, result);
        });
};

exports.getSources = function (event, cb) {
    console.log("getSources", JSON.stringify(event));

    Source.scan()
        .exec(function (err, data) {
            if (err) cb(err);
            var result = {
                body: data.Items
            };
            return cb(null, result);
        });
};
