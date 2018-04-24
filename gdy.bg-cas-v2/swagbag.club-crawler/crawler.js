'use strict';

let Crawler = require("simplecrawler");
const cheerio = require("cheerio");
const config = require('./config.json')

module.exports.crawl = function (event, callback) {

    let publisher = event.publisher;

    let start = new Date();
    console.log("BEGIN CRAWLING @" + start);

    let crawler = Crawler(config[publisher].crawlUrl)

        .on("fetchcomplete", function (queueItem, responseBuffer, response) {

            let r = config[publisher].regex;

            if (new RegExp(r.urlMatcher, 'i').test(queueItem.url)) {

                let responseStr = responseBuffer.toString("utf8").replace(new RegExp(r.newLineMatcher, 'g'), '');

                try {
                    let json = JSON.parse(new RegExp(r.jsonMatcher, 'i').exec(responseStr)[1]);

                    if (config[publisher].keywords.some(v => json.keywords.includes(v))) {
                        let props = config[publisher].properties;
                        let match = new RegExp(r.closingDateMatcher, 'i').exec(responseStr);
                        let closingDate = !match ? '' : match[1];
                        let comp = {
                            url: json[props.url],
                            img: json[props.img] instanceof Array ? json[props.img][0] : json[props.img],
                            title: json[props.title],
                            closingDate: closingDate,
                            publisher: publisher
                        };
                        console.log('-----------------------------------------------------------------------');
                        console.log(comp);
                        console.log('-----------------------------------------------------------------------');
                    }
                } catch (error) {
                    console.log('NOT SCRAPING ', queueItem.url);
                    console.log('BECAUSE  ', error);
                }
            }
        });

    crawler.maxDepth = config[publisher].crawlDepth;

    crawler.on('complete', function () {
        let now = new Date();
        console.log("END CRAWLING @" + now + ", execution time in sec :" + (now - start) / 1000 + 's');
        callback(null, "some success message");
    });

    crawler.start();

};
