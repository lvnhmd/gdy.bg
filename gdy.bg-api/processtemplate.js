/*
 *  Parametrize cloudformation template 
 *  
 */

var fs = require('fs');
var jsonfile = require('jsonfile');
var traverse = require('traverse');
var _ = require('lodash');
var mkdirp = require('mkdirp');
var path = require('path');

function thenReplace() {

    jsonfile.readFile('.serverless/cloudformation-template-update-stack.json', function (err, json) {
        if (err) console.error(err);

        console.log("2. Process " + json['Description']);

        var parameters = {

            "LambdaBucketName": {
                "Description": "The name of the S3 bucket that contains the Lambda zip and ClourdFormation template, which must be in the same region as this stack",
                "Type": "String"
            },
            "LambdaBucketKey": {
                "Description": "The file name of the source artifact, such as myfolder/myartifact.zip",
                "Type": "String"
            },
            "StageName": {
                "Description": "StageName",
                "Type": "String"
            },
            "APIBasePath": {
                "Description": "APIBasePath",
                "Type": "String"
            },
            "APIDomainName": {
                "Description": "APIDomainName",
                "Type": "String"
            }
        };


        var cft = JSON.stringify(json);
        var ApiGatewayDeploymentName = cft.substring(cft.indexOf('ApiGatewayDeployment'), cft.indexOf('"', cft.indexOf('ApiGatewayDeployment')));
        console.log('ApiGatewayDeploymentName : ' + ApiGatewayDeploymentName);

        var newJson = {};
        newJson['AWSTemplateFormatVersion'] = json['AWSTemplateFormatVersion'];
        newJson['Description'] = 'gdy.bg API Stack (API Gateway Methods, Lambda Functions)';
        newJson['Parameters'] = parameters;
        newJson['Resources'] = json['Resources'];
        newJson['Outputs'] = json['Outputs'];

        newJson['Resources']['LambdaExecutionRole'] = {
            "Type": "AWS::IAM::Role",
            "Properties": {
                "AssumeRolePolicyDocument": {
                    "Version": "2012-10-17",
                    "Statement": [{
                        "Effect": "Allow",
                        "Principal": {
                            "Service": [
                                "lambda.amazonaws.com"
                            ]
                        },
                        "Action": [
                            "sts:AssumeRole"
                        ]
                    }]
                },
                "ManagedPolicyArns": [
                    "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
                    "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess"
                ],
                "Policies": [{
                    "PolicyName": "root",
                    "PolicyDocument": {
                        "Version": "2012-10-17",
                        "Statement": [{
                            "Action": [
                                "dynamodb:DescribeTable",
                                "dynamodb:Query",
                                "dynamodb:Scan",
                                "dynamodb:GetItem",
                                "dynamodb:PutItem",
                                "dynamodb:UpdateItem",
                                "dynamodb:DeleteItem",
                                "dynamodb:DescribeStream",
                                "dynamodb:GetRecords",
                                "dynamodb:GetShardIterator",
                                "dynamodb:ListStreams",
                                "s3:PutObject",
                                "logs:CreateLogGroup",
                                "logs:CreateLogStream",
                                "logs:PutLogEvents",
                                "logs:DescribeLogStreams"],
                            "Effect": "Allow",
                            "Resource": "*"
                        }]
                    }
                }]
            }
        };

        // newJson['Resources']['ApiGatewayBasePathMapping'] = {
        //     "Type": "AWS::ApiGateway::BasePathMapping",
        //     "DependsOn": ["ApiStage", "ApiGatewayRestApi", ApiGatewayDeploymentName],
        //     "Properties": {
        //         "BasePath": { "Ref": "APIBasePath" },
        //         "DomainName": { "Ref": "APIDomainName" },
        //         "RestApiId": { "Ref": "ApiGatewayRestApi" },
        //         "Stage": { "Ref": "StageName" }
        //     }
        // };

        // newJson['Resources']['ApiStage'] = {
        //     "Type": "AWS::ApiGateway::Stage",
        //     "Properties": {
        //         "CacheClusterEnabled": true,
        //         "CacheClusterSize": "0.5",
        //         "DeploymentId": { "Ref": ApiGatewayDeploymentName },
        //         "MethodSettings": [{
        //             "ResourcePath": "/*/",
        //             "HttpMethod": "GET",
        //             "CachingEnabled": true,
        //             "CacheTtlInSeconds": 3600
        //         }],
        //         "RestApiId": { "Ref": "ApiGatewayRestApi" },
        //         "StageName": { "Ref": "StageName" }
        //     }
        // };

        // remove cache, its expensive
        newJson['Resources']['ApiStage'] = {
            "Type": "AWS::ApiGateway::Stage",
            "Properties": {
                "DeploymentId": { "Ref": ApiGatewayDeploymentName },
                "RestApiId": { "Ref": "ApiGatewayRestApi" },
                "StageName": { "Ref": "StageName" }
            }
        };

        if (typeof newJson['Resources']['ServerlessDeploymentBucket'] !== 'undefined') {
            delete newJson['Resources']['ServerlessDeploymentBucket'];
        }
        if (typeof newJson['Outputs']['ServerlessDeploymentBucketName'] !== 'undefined') {
            delete newJson['Outputs']['ServerlessDeploymentBucketName'];
        }

        delete newJson['Resources']['IamPolicyLambdaExecution'];
        newJson = pruneEmpty(newJson);

        traverse(newJson['Resources']).forEach(function (node) {

            if (node !== null && typeof node !== 'undefined' && typeof node['Properties'] !== 'undefined') {

                if (typeof node['Properties']['Code'] !== 'undefined') {
                    node['Properties']['Code'] = {
                        "S3Bucket": { "Ref": "LambdaBucketName" },
                        "S3Key": { "Ref": "LambdaBucketKey" }
                    };
                }
                if (typeof node['Properties']['StageName'] !== 'undefined') {
                    node['Properties']['StageName'] = { "Ref": "StageName" };
                }
                if (typeof node['Properties']['Role'] !== 'undefined') {
                    node['Properties']['Role'] = { "Fn::GetAtt": ["LambdaExecutionRole", "Arn"] };
                }
                if (typeof node['Properties']['CodeSha256'] !== 'undefined') {
                    delete node['Properties']['CodeSha256'];
                }
                if (typeof node['Type'] !== 'undefined' && node['Type'] === "AWS::Lambda::Function" && typeof node['Properties']['FunctionName'] !== 'undefined') {
                    var splits = node['Properties']['FunctionName'].split("-");
                    node['Properties']['FunctionName'] = { "Fn::Join": ["-", ["swagbagclub", { "Ref": "StageName" }, splits[splits.length - 1]]] };
                }
                if (typeof node['Type'] !== 'undefined' && node['Type'] === "AWS::ApiGateway::Deployment") {
                    node['Properties']['StageName'] = "Default";
                }

            }
            if (typeof node['Type'] !== 'undefined' && node['Type'] === "AWS::Logs::LogGroup") {
                console.log('this ', this.path[0]);
                delete newJson['Resources'][this.path[0]];
            }
            if (node !== null && typeof node !== 'undefined' && typeof node['DependsOn'] !== 'undefined') {
                node['DependsOn'] !== _.remove(node['DependsOn'], function (item) {
                    return item === "IamPolicyLambdaExecution";

                });
            }

        });

        mkdirp(path.dirname('build/cloudformation-template-update-stack-param.json'), function (err) {
            if (err) console.log(err);
            jsonfile.writeFile('build/cloudformation-template-update-stack-param.json', newJson, { spaces: 3 }, function (err) {
                if (err) console.error(err);
                console.log('3. Write cloudformation-template-update-stack-param.json');
            });
        });



    });
}

function firstN(obj, n) {
    return _.chain(obj)
        .keys()
        .take(n)
        .reduce(function (memo, current) {
            memo[current] = obj[current];
            return memo;
        }, {})
        .value();
};


function pruneEmpty(obj) {
    return function prune(current) {
        _.forOwn(current, function (value, key) {
            if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
                (_.isObject(value) && _.isEmpty(prune(value)))) {

                delete current[key];
            }
        });
        // remove any leftover undefined values from the delete 
        // operation on an array
        if (_.isArray(current)) _.pull(current, undefined);

        return current;

    }(_.cloneDeep(obj));  // Do not modify the original object, create a clone instead
}

thenReplace();