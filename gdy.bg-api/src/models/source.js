var AWS = require('aws-sdk'),
  Vogels = require('vogels'),
  Joi = require('joi');

// assume available role 
AWS.config.update({ region: 'eu-west-1' });
if (process.env.NODE_ENV === 'dev')
  AWS.config.loadFromPath(__dirname + '/credentials_local.json');
var dynamodb = new AWS.DynamoDB();
Vogels.dynamoDriver(dynamodb);

module.exports = Vogels.define('source', {
  hashKey: 'name',

  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps: true,

  schema: {
    name: Joi.string(),
    favicon: Joi.string()
  },
  tableName: 'sources'
});