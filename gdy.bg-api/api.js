var Competition = require('./models/competition');
var Source = require('./models/source');

exports.getCompetitions = function (event, cb) {
    console.log("getCompetitions", JSON.stringify(event));

    Competition.scan().exec(function (err, data) {
        if (err) cb(err);
        var result = {
            body: data
        };
        return cb(null, result);
    });
};

exports.getSources = function (event, cb) {
    console.log("getSources", JSON.stringify(event));

    Sourcemeta.scan().exec(function (err, data) {
        if (err) cb(err);
        var result = {
            body: data
        };
        return cb(null, result);
    });
};
