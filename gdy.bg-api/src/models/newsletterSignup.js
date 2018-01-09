var AWS = require('aws-sdk'),
    Vogels = require('vogels'),
    Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = Vogels.define('newsletterSignup', {
    hashKey: 'email',
    timestamps: true,

    schema: {
        email: Joi.string()
    },

    tableName: 'newsletterSignup'
});