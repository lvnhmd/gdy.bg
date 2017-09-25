var AWS = require('aws-sdk'),
    Vogels = require('vogels'),
    Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
if (process.env.NODE_ENV === 'dev')
    AWS.config.loadFromPath(__dirname + '/credentials_local.json');
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = Vogels.define('entry', {
    hashKey: 'uri',
    timestamps: true,

    schema: {
        uri: Joi.string(),
        userId: Joi.string(),
        userName: Joi.string()
    },

    tableName: 'entry'
});