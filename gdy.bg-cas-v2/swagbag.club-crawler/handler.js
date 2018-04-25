'use strict';

const Crawler = require('./crawler');

module.exports.crawl = function (event, context, callback) {
  Crawler.crawl(event, callback);
}