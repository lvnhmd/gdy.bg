aws cloudformation list-stacks --region eu-west-1 --output table --query 'StackSummaries[*].StackName'

# TODO write a script to destroy template, build stuff , upload to s3 bucket and create the template

1.export NODE_ENV=dev && ./build.sh
   export NODE_ENV=prod && ./build.sh 

2. aws s3 cp build s3://swagbag.club-source/ --recursive --exclude ".DS_Store" --exclude "parameters.json"

3. aws cloudformation create-stack  --stack-name swagbag-club --template-url https://s3-eu-west-1.amazonaws.com/swagbag.club-source/cloudformation-template-update-stack-param.json --parameters file:///Users/alie/elvin-workspace/gdy.bg/gdy.bg-api/build/parameters.json --capabilities CAPABILITY_IAM
    
doc:
http://forum.serverless.com/t/dynamodb-streams-creation/792/2