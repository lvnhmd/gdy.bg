aws cloudformation list-stacks --region eu-west-1 --output table --query 'StackSummaries[*].StackName'

aws apigateway create-base-path-mapping --domain-name api.swagbag.club 
--rest-api-id 1234123412 --stage dev --base-path v1

# TODO write a script to destroy template, build stuff , upload to s3 bucket and create the template

1.export NODE_ENV=dev && ./build.sh
   export NODE_ENV=prod && ./build.sh 

2. aws s3 cp build s3://swagbag.club-source/ --recursive --exclude ".DS_Store" --exclude "parameters.json"

3. 
@home
-pink one
aws cloudformation create-stack  --stack-name swagbag-club --template-url https://s3-eu-west-1.amazonaws.com/swagbag.club-source/cloudformation-template-update-stack-param.json --parameters file:///Users/elvin/gdy.bg/gdy.bg-api/build/parameters.json --capabilities CAPABILITY_NAMED_IAM
-big one 
aws cloudformation create-stack  --stack-name swagbag-club --template-url https://s3-eu-west-1.amazonaws.com/swagbag.club-source/cloudformation-template-update-stack-param.json --parameters file:///Users/elvinali/gdy.bg/gdy.bg-api/build/parameters.json --capabilities CAPABILITY_NAMED_IAM


@work
aws cloudformation create-stack  --stack-name swagbag-club --template-url https://s3-eu-west-1.amazonaws.com/swagbag.club-source/cloudformation-template-update-stack-param.json --parameters file:///Users/alie/elvin-workspace/gdy.bg/gdy.bg-api/build/parameters.json --capabilities CAPABILITY_NAMED_IAM

doc:
http://forum.serverless.com/t/dynamodb-streams-creation/792/2

aws configure 

AKIAJHWFOJEOMDBQUB3A

1.Create custom domain name in API Gateway - takes 40 min to propagate 
2.Create a record set type A Alias Yes with the Distribution Domain Name (cloudfront) in Route 53
3.Base path mapping will be created by my template, but before deleting the stack I have to remove it manually  
  Note: as it takes too long to delete the stack when AWS::ApiGateway::BasePathMapping is present, do not iclude it when testing

to test locally:
  cd /usr/local/bin/dynamodb_local_2016-05-17/
  java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
  export NODE_ENV=dev && node test.js
  http://localhost:8000/shell/