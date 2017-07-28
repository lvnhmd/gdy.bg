var Competition = require('./models/competition');
var Source = require('./models/source');

exports.getCompetitions = function (event, cb) {
    console.log("getCompetitions", JSON.stringify(event));

    Competition.scan()
        // can not use index with scan 
        // .usingIndex('daysToEnterIndex')
        // .ascending()
        .exec(function (err, data) {
            if (err) cb(err);
            var result = {
                body: data.Items
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

exports.postUser = function (event, cb) {
    console.log("postUser", JSON.stringify(event));

    
};