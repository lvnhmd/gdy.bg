var AWS = require('aws-sdk'),
  Vogels = require('vogels'),
  Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = vogels.define('source', {
  hashKey: 'name',

  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps: true,

  schema: {
    name: Joi.string(),
    favicon: Joi.string(),
    filterBy: Joi.boolean().default(false)
  },
  tableName: 'sources'
});