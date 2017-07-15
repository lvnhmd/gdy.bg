var moment = require('moment');

var date = '21/08/18';

// ttl
var format = 'DD/MM/YY';
// some of the competitions have 4 YYYY digits in closes by date
if (date.search(/\d{4}/) > -1) {
    format = 'DD/MM/YYYY';
}

// moment loses a day, add it back 
var closesByDate = moment(date,format).add(1, 'days').toDate();

// calculate ttl
var ttl = +closesByDate;

console.log(closesByDate);
console.log(ttl);

// change to current working dir
process.chdir(__dirname);
require('./src/scraper').scrape();