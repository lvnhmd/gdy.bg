node.js dynamodb

http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html

mv ~/Downloads/dynamodb_local_2016-05-17 /usr/local/bin

cd /usr/local/bin/dynamodb_local_2016-05-17/

java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

http://localhost:8000/shell/

http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.JsShell.html#GettingStarted.JsShell.Prereqs.Download

http://josephmr.com/dynamodb-testing-locally-with-node/

TRY https://www.npmjs.com/package/dynamodb

http://www.markomedia.com.au/dynamodb-for-javascript-cheatsheet/

https://github.com/ryanfitz/vogels

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

<!--Create table on the shell-->
var params = { 
    TableName: "productinformation",
    AttributeDefinitions:[{
        AttributeName:"productInfoId",
        AttributeType:"S"
    }],
    KeySchema: [{
        AttributeName:"productInfoId",
        KeyType:"HASH"
    }],
    ProvisionedThroughput:{
        ReadCapacityUnits:150,
        WriteCapacityUnits:150
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});
