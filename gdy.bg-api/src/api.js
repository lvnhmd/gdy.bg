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

    var postUpdate = function (err, data) {
        if (err) console.log("error occured", err);
        var result = {
            body: data
        };
    };

    var user = {};
    user.userId = event.body._provider + '_' + event.body._profile.id;
    user.provider = event.body._provider;
    user.name = event.body._profile.name;
    user.email = event.body._profile.email ? event.body._profile.email : '';
    user.profilePicURL = event.body._profile.profilePicURL;
    user.accessToken = event.body._token.accessToken;
    // normalise expiresAt 
    // coming back from Facebook : How to interpret the the oauth expires=4 digit code upon receiving access token
    // It is the no of seconds before expiry time. 
    var expiresAt = event.body._token.expiresAt;
    if ('facebook' === user.provider) {
        expiresAt = +(moment(new Date()).add(+expiresAt, 'seconds').toDate()) / 1000;
    }
    else if ('google' === user.provider) {
        expiresAt = +expiresAt / 1000;
    }

    user.expiresAt = expiresAt;

    User.get(user.userId, function (err, data) {
        if (err) {
            console.log('error occured ', err);
        } else if (data) {
            console.log('update user ', data.get().userId);
            User.update(user, postUpdate);
        } else {
            console.log('create user ', user.userId);
            User.create(user, postUpdate);
        }
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