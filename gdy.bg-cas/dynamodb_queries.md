cd /usr/local/bin/dynamodb_local_2016-05-17/

java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

http://localhost:8000/shell/

var params = { 
    TableName: "sourcemetas"
};


docClient.scan(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});

dynamodb.deleteTable(params, function(err, data) {
    if (err) console.log(err); // an error occurred
    else console.log(data); // successful response
});

var params = {};

dynamodb.listTables(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});
