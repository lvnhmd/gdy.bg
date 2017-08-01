var Competition = require('./models/competition');
var Source = require('./models/source');
var User = require('./models/user');
var Entry = require('./models/entry');
var moment = require('moment');

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
    console.log("postUser ", JSON.stringify(event));

    var user = {};
    user.userId = event.body._provider + '_' + event.body._profile.id;
    user.provider = event.body._provider;
    user.name = event.body._profile.name;
    user.email = event.body._profile.email;
    user.profilePicURL = event.body._profile.profilePicURL;
    user.accessToken = event.body._profile.accessToken;

    // normalise expiresAt 
    // coming back from Facebook : How to interpret the the oauth expires=4 digit code upon receiving access token
    // It is the no of seconds before expiry time. 
    var expiresAt = event.body._profile.expiresAt;
    if ('facebook' === user.provider) {
        expiresAt = +(moment(new Date()).add(+expiresAt, 'seconds').toDate()) / 1000;
    }
    else if ('google' === user.provider) {
        expiresAt = +expiresAt / 1000;
    }

    user.expiresAt = expiresAt;

    User.create(user, { overwrite: false },
        function (err, data) {
            if (err) cb(err);
            console.log("data ", data);
            var result = {
                body: data
            };

        });
};

exports.trackEntry = function (event, cb) {
    console.log("trackEntry ", JSON.stringify(event));

    var entry = event.body;

    Entry.create(entry, { overwrite: true },
        function (err, data) {
            if (err) cb(err);
            
            var result = {
                body: data
            };

        });
};