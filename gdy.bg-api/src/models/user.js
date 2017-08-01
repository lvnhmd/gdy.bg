var AWS = require('aws-sdk'),
    Vogels = require('vogels'),
    Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
if (process.env.NODE_ENV === 'dev')
    AWS.config.loadFromPath(__dirname + '/credentials_local.json');
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = Vogels.define('user', {
    hashKey: 'userId',

    timestamps: true,

    schema: {
        userId: Joi.string(),
        provider: Joi.string(),
        name: Joi.string(),
        email: Joi.string(),
        profilePicURL: Joi.string(),
        accessToken: Joi.string(),
        expiresAt: Joi.number()
    },

    tableName: 'user'
});