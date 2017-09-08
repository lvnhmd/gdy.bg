aws s3 cp build/ s3://swagbag.club/ --recursive --exclude ".DS_Store" --exclude "parameters.json"

# set cache-control header
aws s3 cp s3://mybucket/ s3://mybucket/ --recursive --metadata-directive REPLACE \ --expires 2034-01-01T00:00:00Z --acl public-read --cache-control max-age=2592000,public


aws s3 sync --acl public-read build/ s3://swagbag.club
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E3MUDXLA707SSC --paths '/*'
