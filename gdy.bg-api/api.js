// var moment = require('moment');
// var uuid = require('node-uuid');
// var AWS = require('aws-sdk');
// var db = new AWS.DynamoDB();

var Competition = require('./models/competition');

exports.getCompetitions = function(event, cb) {
    console.log("getCompetitions", JSON.stringify(event));
    // var params = {
    //   "TableName": "competitions",
    //   "Limit": event.parameters.limit || 100
    // };
    // if (event.parameters.next) {
    //   params.ExclusiveStartKey = {
    //     "uid": {
    //       "S": event.parameters.next
    //     }
    //   };
    // }
    // db.scan(params, function(err, data) {
    //   if (err) {
    //     cb(err);
    //   } else {
    //     var res = {
    //       "body": data.Items.map(mapUserItem)
    //     };
    //     if (data.LastEvaluatedKey !== undefined) {
    //       res.headers = {"next": data.LastEvaluatedKey.uid.S};
    //     }
    //     cb(null, res);
    //   }
    // });


    Competition.scan().exec(function(err, data) {
        if (err) cb(err);
        var result = {
            "body": data
        };
        return cb(null, result);
    });


};
