var moment = require('moment');

var date = '13/07/17';


// closesInDays 
// ttl

var format = 'DD/MM/YY';
// some of the competitions have 4 YYYY digits in closes by date
if (date.search(/\d{4}/) > -1) {
    format = 'DD/MM/YYYY';
}

var closesBy = moment(date,format);

console.log(closesBy);
