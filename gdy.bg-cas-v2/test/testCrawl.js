'use strict';

const Crawler = require('../swagbag.club-crawler/crawler');

module.exports.crawl = function (event, context, callback) {
    console.log("publisher is " + event.publisher);
    console.log(event);
    Crawler.crawl(event, callback);
    callback(null, "some success message");
    // or 
    // callback("some error type"); 
}