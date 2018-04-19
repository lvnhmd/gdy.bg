var Crawler = require("simplecrawler");
var cheerio = require("cheerio");
// https://stackoverflow.com/questions/7163061/is-there-a-require-for-json-in-node-js?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
var config = require('./config.json')

// let publisher = 'stylist';
// let publisher = 'shortlist';
let publisher = 'mrhyde';

var start = new Date();
console.log("BEGIN CRAWLING @" + start);

var crawler = Crawler(config[publisher].crawlUrl)
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {

        // console.log(queueItem.url);
        let r = config[publisher].regex;

        if (new RegExp(r.urlMatcher, 'i').test(queueItem.url)) {

            let responseStr = responseBuffer.toString("utf8").replace(new RegExp(r.newLineMatcher, 'g'), '');

            try {
                let json = JSON.parse(new RegExp(r.jsonMatcher, r.jsonMatcherFlags).exec(responseStr)[1]);

                console.log(json);

                if (config[publisher].keywords.some(v => json.keywords.includes(v))) {
                    let props = config[publisher].properties;
                    let match = new RegExp(r.closingDateMatcher, 'i').exec(responseStr);
                    let closingDate = !match ? '' : match[1];
                    let comp = {
                        url: json[props.url],
                        img: json[props.img][0] ? json[props.img][0] : json[props.img],
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



// var mrhydeCrawler = Crawler("https://www.mrhyde.com/")
//     .on("fetchcomplete", function (queueItem, responseBuffer, response) {

//         if (queueItem.url.match(//i)) {
//             console.log('-----------------------------------------------------------------------');
//             let responseStr = responseBuffer.toString("utf8").replace(/\r?\n|\r/g, '');
//             try {
//                 let json = JSON.parse(/({.*})<\/script>/.exec(/json\">(.+)<\/script>/g.exec(responseStr)[1])[1]);

//                 let match = //.exec(responseStr);
//                 let closingDate = !match ? '' : match[1];
//                 let comp = {
//                     url: json.url,
//                     img: json.thumbnailUrl,
//                     title: json.headline,
//                     closingDate: closingDate,
//                     publisher: 'mrhyde'
//                 };
//                 console.log('-----------------------------------------------------------------------');
//                 console.log(comp);
//                 console.log('-----------------------------------------------------------------------');
//                 // }
//             } catch (error) {
//                 console.log('NOT SCRAPING ', queueItem.url);
//             }
//         }
//     });

// mrhydeCrawler.on('complete', function () {
//     let now = new Date();
//     console.log("END CRAWLING @" + now + ", execution time in sec :" + (now - start) / 1000 + 's');
// });

// mrhydeCrawler.maxDepth = 3;

// mrhydeCrawler.start();




var cntravellerCrawler = Crawler("http://www.cntraveller.com/topic/competitions")
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {

        if (queueItem.url.match(/.+(win-|competition).+/i)) {
            console.log(queueItem.url);
            //     console.log('-----------------------------------------------------------------------');
            //     let responseStr = responseBuffer.toString("utf8").replace(/\r?\n|\r/g , '') ;
            //     try {
            //         let json = JSON.parse(/({.*})<\/script>/.exec(/json\">(.+)<\/script>/g.exec(responseStr)[1])[1]);

            //         let match = /closes.*((?:\d{1}|\d{2})\/\d{2}\/\d{2})/.exec(responseStr);
            //         let closingDate = !match ? '' : match[1];
            //         let comp = {
            //             url: json.url,
            //             img: json.thumbnailUrl,
            //             title: json.headline,
            //             closingDate: closingDate,
            //             publisher: 'mrhyde'
            //         };
            //         console.log('-----------------------------------------------------------------------');
            //         console.log(comp);
            //         console.log('-----------------------------------------------------------------------');
            //         // }
            //     } catch (error) {
            //         console.log('NOT SCRAPING ', queueItem.url);
            //     }
        }
    });

cntravellerCrawler.on('complete', function () {
    let now = new Date();
    console.log("END CRAWLING @" + now + ", execution time in sec :" + (now - start) / 1000 + 's');
});

cntravellerCrawler.maxDepth = 3;

// cntravellerCrawler.start();
