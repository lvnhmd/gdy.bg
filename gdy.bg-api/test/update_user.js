'use strict';
var moment = require('moment');
var AWS = require('aws-sdk'),
    Vogels = require('vogels'),
    Joi = require('joi');

AWS.config.update({ region: 'eu-west-1' });
AWS.config.loadFromPath('credentials_local.json');
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

var User = Vogels.define('user', {
    hashKey: 'userId',

    timestamps: true,

    schema: {
        userId: Joi.string(),
        provider: Joi.string(),
        name: Joi.string(),
        email: Joi.string().allow('').optional(),
        profilePicURL: Joi.string(),
        accessToken: Joi.string(),
        expiresAt: Joi.number()
    },

    tableName: 'user'
});

Vogels.createTables(function (err) {
    if (err) {
        console.log('Error creating tables', err);
        process.exit(1);
    }

    var event = {
        body: {
            "_provider": "facebook",
            "_profile": {
                "id": "10213148518654673",
                "name": "Elvin Ali",
                "firstName": "Elvin",
                "lastName": "Ali",
                "profilePicURL": "https://scontent.xx.fbcdn.net/v/t1.0-1/c51.73.577.577/s50x50/14054920_10210533229354075_5241987025513448347_n.jpg?oh=e9fdbaa292c4dd8abee28d69a8adcf13&oe=5A1F4EB2"
            },
            "_token": {
                "accessToken": "EAAZA3PrAEFlsBAOm8prNYEckSZAtgNolcP5MqIf1nur3I4MekTGwlMlxLZA0V0Q4kgitjkUgpXtbeLGi591yo818ZB68sBFV0at974QnQHK4WalYbtP85ZCmbICoORTrwJ7iUu6kYOPSkZBZCaLO6gjloJMQ5XKkwXGy03cB7My8JZCtf66BPZAcprzS2Ys6aHSjhZCpZAwvAD5YQZDZD",
                "expiresAt": 5264
            }
        }
    };

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

});
