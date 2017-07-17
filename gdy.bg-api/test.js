var moment = require('moment');
var d = new Date();

var day   = d.getDate() + '';
var month = d.getMonth() + 1 + '';
var date  = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

var format = 'YYYY-MM-DDT00:00:00.000Z';


var compDate = date;

// moment loses a day, add it back 
var closesByDate = moment(date, format).add(1, 'days').toDate();

console.log(' comp.date ',compDate);
console.log(' closesByDate ', closesByDate);
console.log(' ttl ', +closesByDate);

// calculate days between now and closesByDate
console.log(' daysToEnter ', moment(closesByDate).diff(moment(new Date()), 'days'));
 


// change to current working dir
// process.chdir(__dirname);
// require('./src/scraper').scrape();

