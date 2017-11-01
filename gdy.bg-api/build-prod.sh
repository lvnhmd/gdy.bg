#!/bin/bash
sls deploy --stage prod --noDeploy && export NODE_ENV=prod && node processtemplate.js 
cp .serverless/swagbag-club.zip build/swagbag-club-prod.zip
aws s3 cp build s3://swagbag.club-source/ --recursive --exclude ".DS_Store" --exclude "parameters*.json"  --exclude "*dev*.*"
aws cloudformation create-stack  --stack-name swagbag-club-prod --template-url https://s3-eu-west-1.amazonaws.com/swagbag.club-source/cloudformation-template-update-stack-param-prod.json --parameters file:///Users/elvin/gdy.bg/gdy.bg-api/build/parameters-prod.json --capabilities CAPABILITY_NAMED_IAM
