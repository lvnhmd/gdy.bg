var Competition = require('./models/competition');
var User = require('./models/user');
var Entry = require('./models/entry');
var moment = require('moment');
var logger = require('./logger');
var moment = require('moment');
var _ = require('lodash');

exports.getCompetitions = function (event, cb) {
    logger.info("getCompetitions %j", event);

    Competition.scan()
        .where('show').equals(true)
        .exec(function (err, data) {
            if (err) cb(err);

            for (var i in data.Items) {

                var daysToEnter = moment(data.Items[i].attrs.closesByDate)
                    .diff(moment(new Date()), 'days') + 1;

                data.Items[i].attrs.daysToEnter = daysToEnter;

            }

            // remove any with daysToEnter < 0
            _.remove(data.Items, function (item) {
                return item.attrs.daysToEnter < 0;
            });

            var result = {
                body: data.Items
            };
            return cb(null, result);
        });
};

exports.getSources = function (event, cb) {
    logger.info("getSources %j", event);

    return cb(null, {
        body: JSON.parse(require('fs').
            readFileSync(__dirname + '/sources/sources.json', 'utf8'))
    });

};

exports.postUser = function (event, cb) {
    logger.info("postUser %j", event);

    var postUpdate = function (err, data) {
        if (err) logger.error(err);
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
            logger.error(err);
        } else if (data) {
            logger.info('update user ', data.get().userId);
            User.update(user, postUpdate);
        } else {
            logger.info('create user ', user.userId);
            User.create(user, postUpdate);
        }
    });
};

exports.trackEntry = function (event, cb) {
    logger.info("trackEntry  %j", event);

    var entry = event.body;

    Entry.create(entry, { overwrite: true },
        function (err, data) {
            if (err) cb(err);

            var result = {
                body: data
            };

        });
};