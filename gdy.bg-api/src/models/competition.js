var AWS = require('aws-sdk'),
  Vogels = require('vogels'),
  Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
if (process.env.NODE_ENV === 'dev')
  AWS.config.loadFromPath(__dirname + '/credentials_local.json');
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = Vogels.define('competition', {
  hashKey: 'uri',
  // rangeKey: 'daysToEnter',
  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps: true,

  schema: {
    uri: Joi.string(),
    img: Joi.string(),
    title: Joi.string(),
    source: Joi.string(),
    closesByDate: Joi.date(),
    ttl: Joi.number(),
    daysToEnter: Joi.number(),
    date: Joi.string(),
    show: Joi.boolean().default(true)
  },

  // indexes: [{
  //   hashKey: 'uri', rangeKey: 'daysToEnter', type: 'local', name: 'DaysToEnterIndex'
  // }],

  tableName: 'competitions'
});