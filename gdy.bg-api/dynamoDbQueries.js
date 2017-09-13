var params = {
    TableName : "usersessions",
    KeyConditionExpression: "#sid = :sid",
    ExpressionAttributeNames:{
        "#sid": "sessionId"
    },
    ExpressionAttributeValues: {
        ":sid": "0660e974-308f-40fd-88db-2e50534e91da"
    }
};

docClient.query(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});

var params = {
    TableName : "competitions"
};

docClient.scan(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});