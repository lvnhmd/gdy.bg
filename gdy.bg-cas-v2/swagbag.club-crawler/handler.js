'use strict';

// let publisher = 'stylist';
// let publisher = 'shortlist';
// let publisher = 'mrhyde';

// ['stylist', 'shortlist', 'mrhyde'].forEach(publisher => {

// if I configure an event and add the publisher value as a key to it 
// I will only need one function - crawl
// let event = {
//   "publisher": "stylist"
// };
// let callback = function (err, success) {
//   if (err) console.log(err);
//   console.log(success);
// };

const Crawler = require('./crawler');

module.exports.crawl = function (event, context, callback) {
  console.log("publisher is " + event.publisher);
  console.log(event);
  Crawler.crawl(event, callback);
  // callback(null, "some success message");
  // or 
  // callback("some error type"); 
}