var dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'eu-west-1'
});

dynamoose.local();

module.exports = dynamoose.model(
    'Competition', {
        uri: {
            type: String,
            hashKey: true
        },
        img: {
            type: String
        },
        title: {
            type: String,
            trim: true,
            lowercase: true
        },
        source: {
            type: String
        },
        stamp: {
            type: Date,
            default: Date.now
        },
        closes: {
            type: Date
        },
        show: {
            type: Boolean,
            default: true
        }
    });
