// var mongoose = require('mongoose');

// var sourceMetaSchema = mongoose.Schema({

// 	name: {
// 		type: String
// 	},
// 	favicon: {
// 		type: String
// 	},
// 	stamp: {
// 		type: Date,
// 		default: Date.now
// 	},
// 	filterBy: {
// 		type: Boolean,
// 		default: false
// 	}

// });
// var uuid = require('uuid');
var dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'eu-west-1'
});

dynamoose.local();

module.exports = dynamoose.model(
    'SourceMeta', {
        name: {
            type: String,
            hashKey: true
        },
        favicon: {
            type: String
        },
        stamp: {
            type: Date,
            default: Date.now
        },
        filterBy: {
            type: Boolean,
            default: false
        }

    });
