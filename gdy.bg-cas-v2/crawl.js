var Crawler = require("simplecrawler");
var cheerio = require("cheerio");
// https://stackoverflow.com/questions/7163061/is-there-a-require-for-json-in-node-js?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
var config = require('./config.json')

// let publisher = 'stylist';
let publisher = 'shortlist';
// let publisher = 'mrhyde';

var start = new Date();
console.log("BEGIN CRAWLING @" + start);

var crawler = Crawler(config[publisher].crawlUrl)
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
});

crawler.start();