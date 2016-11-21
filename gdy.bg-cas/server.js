var async = require("async");
var helper = require('./sources/helper');

var SourceMeta = require('./models/sourcemeta');

var dynamoose = require('dynamoose');
var uuid = require('uuid');

dynamoose.AWS.config.update({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'eu-west-1'
});

dynamoose.local();


// var uid = uuid.v4();

// var stylist = new SourceMeta({name: 'stylist'});

// stylist.save();

SourceMeta.scan({}, function (err, metas) {
  
  // console.dir(metas);

  var done = function(err, msg) {
    console.log(msg);
  };


  metas.forEach(function(doc) {

  	console.log(doc.name);

	var tasks = [];
	var source = new require('./sources/' + doc.name);
	tasks.push(function(done) {
        console.log('push source.meta');
        source.meta(done, doc.name + ' meta done');
    });
	
	tasks.push(function(arg1, done) {
		console.log('push source.xray');
		source.xray(done, doc.name + ' xray done');
	});
		tasks.push(function(arg1, arg2, done) {
			// console.log('3 : ' + arg2);
			// persist and validate and send email to admin
			helper.persistCompetitions(arg1, function(err, msg, validation) {
				// if (validation.length > 0) {
				// 	helper.persistValidation(validation, function() {
				// 		util.sendAdminEmail(validation[0].source, validation);
				// 		done(null, '4 : ' + arg1[0].source + ' validation and competitions persisted');
				// 	});
				// } else {
					done(null, '4 : ' + arg1[0].source + ' competitions persisted');
				// }
			});
		});

	console.dir(tasks);

	async.waterfall(tasks, function(err, results) {
		if (err) console.log(error);
		console.log('>>> DONE ', results);
	});

 });		

});

