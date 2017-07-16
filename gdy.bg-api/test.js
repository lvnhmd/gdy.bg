var moment = require('moment');


var date;
var format = 'DD/MM/YY';
// some of the competitions have 4 YYYY digits in closes by date
if (date === null || typeof date === 'undefined') {
    console.log('NULL');
    date =new Date();
    format = 'YYYY-MM-DDT00:00:00.000Z';
}
else if (date !== null && typeof date !== 'undefined') {
    if (date.search(/\d{4}/) > -1) format = 'DD/MM/YYYY';
    // moment loses a day, add it back 
    
}

closesByDate = moment(date, format).add(1, 'days').toDate();
console.log(closesByDate);
console.log('ttl', +closesByDate);

// calculate days between now and closesByDate
var daysToEnter = moment(closesByDate).diff(moment(new Date()), 'days') + 1;
console.log(daysToEnter);



// change to current working dir
// process.chdir(__dirname);
// require('./src/scraper').scrape();

console.log('DATE ' , new Date());