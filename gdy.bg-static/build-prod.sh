#!/bin/bash
npm run build
aws s3 cp build/ s3://swagbag.club/ --recursive --exclude ".DS_Store" --exclude "parameters.json"
aws s3 sync --acl public-read build/ s3://swagbag.club
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E3MUDXLA707SSC --paths '/*'