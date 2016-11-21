// var dynamoose = require('dynamoose');

// dynamoose.AWS.config.update({
//   accessKeyId: 'AKID',
//   secretAccessKey: 'SECRET',
//   region: 'eu-west-1'
// });

// dynamoose.local();
var Joi = require('joi');
var vogels = require('vogels');
// vogels.AWS.config.update({accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: "eu-west-1"});
// vogels.local();

var AWS = require('aws-sdk');

// var opts = { endpoint : 'http://localhost:8000', apiVersion: '2012-08-10' };
vogels.dynamoDriver(new AWS.DynamoDB());

vogels.AWS.config.update({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'eu-west-1',
  endpoint : 'http://localhost:8000'
});


module.exports = vogels.define('SourceMeta', {
  hashKey : 'name',
 
  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps : true,
 
  schema : {
    name        : Joi.string(),
    favicon     : Joi.string(),
    filterBy    : Joi.boolean().default(false)
  }
});



// dynamoose.model(
//     'SourceMeta', {
//         name: {
//             type: String,
//             hashKey: true
//         },
//         favicon: {
//             type: String
//         },
//         stamp: {
//             type: Date,
//             default: Date.now
//         },
//         filterBy: {
//             type: Boolean,
//             default: false
//         }

//     });
