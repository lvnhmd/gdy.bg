#!/bin/bash
sls deploy --stage dev --noDeploy && export NODE_ENV=dev && node processtemplate.js 
cp .serverless/swagbag-club.zip build/swagbag-club-dev.zip
aws s3 cp build s3://swagbag.club-source/ --recursive --exclude ".DS_Store" --exclude "parameters*.json" --exclude "*prod*.*"
aws cloudformation create-stack  --stack-name swagbag-club-dev --template-url https://s3-eu-west-1.amazonaws.com/swagbag.club-source/cloudformation-template-update-stack-param-dev.json --parameters file://./build/parameters-dev.json --capabilities CAPABILITY_NAMED_IAM
