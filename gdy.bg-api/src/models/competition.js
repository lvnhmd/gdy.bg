var AWS = require('aws-sdk'),
  Vogels = require('vogels'),
  Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = Vogels.define('competition', {
  hashKey: 'uri',
  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps: true,

  schema: {
    uri: Joi.string(),
    img: Joi.string(),
    title: Joi.string(),
    source: Joi.string(),
    closesByDate: Joi.date(),
    ttl: Joi.number(),
    date: Joi.string(),
    show: Joi.boolean().default(true)
  },

  tableName: 'competitions'
});