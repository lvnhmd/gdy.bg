godaddy
58429988

http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html

Install aws cli following http://cloudacademy.com/blog/aws-cli-a-beginners-guide/

aws s3 cp build s3://swagbag.club/build/ --recursive --exclude ".DS_Store"

aws s3 cp index.html s3://swagbag.club/index.html

aws cloudfront list-distributions

aws cloudfront create-invalidation --distribution-id=E8MLQMG026CEQ --paths /

TODO: create full release script
http://stackoverflow.com/questions/22021651/amazon-s3-and-cloudfront-cache-how-to-clear-cache-or-synchronize-their-cache


gdy.bg -> www.swagbag.club
www.gdy.bg -> www.swagbag.club
swagbag.club -> www.swagbag.club
www.swagbag.club -> http://www.swagbag.club.s3-website-eu-west-1.amazonaws.com/
in godaddy -> d1i1gp2a7s97nz.cloudfront.net->www.swagbag.club

fb app is in two places :

login.js
window.fbAsyncInit = function () {
        FB.init({
            appId: '1847976505469649',