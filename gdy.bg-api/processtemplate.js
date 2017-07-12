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

// function copy(cb) {

//     jsonfile.readFile('.serverless/cloudformation-template-update-stack.json', function (err, obj) {
//         jsonfile.writeFile('.serverless/gdybg-cloudformation-template.json', obj, { spaces: 2 }, function (err) {
//             if (err) console.error(err);
//             console.log('1. Copy cloudformation-template-update-stack.json to gdybg-cloudformation-template.json');
//             cb();
//         });
//     });

// }

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
                                "dynamodb:DeleteItem"
                            ],
                            "Effect": "Allow",
                            "Resource": "*"
                        }]
                    }
                }]
            }
        };

        newJson['Resources']['ApiGatewayBasePathMapping'] = {
            "Type": "AWS::ApiGateway::BasePathMapping",
            "DependsOn": ["ApiStage", "ApiGatewayRestApi", ApiGatewayDeploymentName],
            "Properties": {
                "BasePath": { "Ref": "APIBasePath" },
                "DomainName": { "Ref": "APIDomainName" },
                "RestApiId": { "Ref": "ApiGatewayRestApi" },
                "Stage": { "Ref": "StageName" }
            }
        };

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

        // var dependsOnArray = newJson['Resources'][ApiGatewayDeploymentName]['DependsOn'];
        // delete newJson['Resources'][ApiGatewayDeploymentName]['DependsOn'];

        // var deploymentDependsOn = [];
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
                // if (typeof node['Properties']['Environment'] !== 'undefined' &&
                //     typeof node['Properties']['Environment']['Variables'] !== 'undefined') {
                //     node['Properties']['Environment']['Variables'] = env_var;
                // }
                if (typeof node['Properties']['Role'] !== 'undefined') {
                    node['Properties']['Role'] = { "Fn::GetAtt": ["LambdaExecutionRole", "Arn"] };
                }
                if (typeof node['Properties']['CodeSha256'] !== 'undefined') {
                    delete node['Properties']['CodeSha256'];
                }
                if (typeof node['Type'] !== 'undefined' && node['Type'] === "AWS::Lambda::Function" && typeof node['Properties']['FunctionName'] !== 'undefined') {
                    var splits = node['Properties']['FunctionName'].split("-");
                    node['Properties']['FunctionName'] = { "Fn::Join": ["-", ["gdybg", { "Ref": "StageName" }, splits[splits.length - 1]]] };
                }
                if (typeof node['Type'] !== 'undefined' && node['Type'] === "AWS::ApiGateway::Deployment") {
                    node['Properties']['StageName'] = "Default";
                }

                // if (typeof node['Type'] !== 'undefined' && (node['Type'] === "AWS::ApiGateway::Method" || node['Type'] === "AWS::ApiGateway::Resource")) {
                //     var nodeName = this.path[0];
                //     console.log('remove ' + JSON.stringify(nodeName));
                //     // delete node;    
                //     delete newJson['Resources'][nodeName];
                //     // delete dependsOnArray[dependsOnArray.indexOf(nodeName)];
                // }

            }
        });

        // jsonfile.writeFile('./build/gdybg-cloudformation-template.json', newJson, { spaces: 3 }, function (err) {
        //     if (err) console.error(err);
        //     console.log('3. Write gdybg-cloudformation-template.json');
        // });

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


// copy(thenReplace);
thenReplace();