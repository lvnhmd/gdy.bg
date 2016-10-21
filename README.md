# gdybg

a [Sails](http://sailsjs.org) application

gdy.bg 

AWS ali.elvin+aws@gmail.com gdy.bg2016

www.register.bg gdy.bg elvinali Lvnhmd21_ 

register.bg 149011 6 Sept 2016

$ sails new gdybg
$ sails lift
http://localhost:1337/
$ sails generate api competition
config/models.js -> migrate: ‘safe'
$ npm install sails-mongo --save
config/connections.js -> myMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    database: 'sails'
  },

—————————————————————————

gdy.bg-Private-EC2

1.Launch a small aws instance 

Because I have a NAT gateway in a VPC, I need to launch a bastion instance in order to be able to ssh :

http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html
	   Launch the bastion in the public subnet.
	...Ensure that your security group rules allow inbound SSH traffic from the range of IP addresses for your local network (you can also use 0.0.0.0/0 for this test), and outbound SSH traffic to the IP 	 address range of your private subnet...

ssh-add -K ~/Downloads/gdybg.pem - configure ssh forwarding (only once)

ssh into public bastion instance
ssh -A ec2-user@ec2-52-30-233-232.eu-west-1.compute.amazonaws.com

ssh into private instance via bastion
ssh ec2-user@10.0.1.151

Note : to run the below command, enable all Outbound HTTP traffic for the SG (gdy.bgSG) of private instance

sudo yum update

2.Install node and mongo

https://github.com/SIB-Colombia/dataportal-explorer/wiki/How-to-install-node-and-mongodb-on-Amazon-EC2

—————————————————————————

duplicate above instance to setup for Jenkins
I think node and mongo will be already installed on it, I do not need mongo on Jenkins but it does not really matter if I have it NOT TRUE

gdy.bg-Private-JenkinsCI
ssh -A ec2-user@ec2-52-30-233-232.eu-west-1.compute.amazonaws.com

ssh into Jenkins via bastion
ssh ec2-user@10.0.1.26

2.Install node
https://github.com/SIB-Colombia/dataportal-explorer/wiki/How-to-install-node-and-mongodb-on-Amazon-EC2

3.Install gulp
sudo npm install --global gulp

4.Install and configure Jenkins
http://sanketdangi.com/post/62715793234/install-configure-jenkins-on-amazon-linux
	
	at step 9 of above tutorial, I need to attach ELB to gdy.bg-Private-JenkinsCI as it sits on the private subnet
