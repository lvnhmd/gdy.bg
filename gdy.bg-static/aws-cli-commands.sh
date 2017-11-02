prod: 
./build-prod.sh


# set cache-control header
aws s3 cp s3://mybucket/ s3://mybucket/ --recursive --metadata-directive REPLACE \ --expires 2034-01-01T00:00:00Z --acl public-read --cache-control max-age=2592000,public

dev:  npm start


