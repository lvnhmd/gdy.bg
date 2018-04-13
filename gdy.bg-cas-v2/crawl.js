var Crawler = require("simplecrawler");
var cheerio = require("cheerio");

var stylistCrawler = Crawler("https://www.stylist.co.uk/win/")
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {

        if (queueItem.url.match(/.+(get-|win-).+\d\d+$/i)) {

            let responseStr = responseBuffer.toString("utf8").replace(/\r?\n|\r/g, '');
            try {
                let json = JSON.parse(/({.*})<\/script>/.exec(/json\">(.+)<\/script>/g.exec(responseStr)[1])[1]);

                let keywords = ['Win', 'Sponsored', 'Events'];

                if (keywords.some(v => json.keywords.includes(v))) {

                    let match = /closes.*((?:\d{1}|\d{2})\/\d{2}\/\d{2})/.exec(responseStr);
                    let closingDate = !match ? '' : match[1];
                    let comp = {
                        url: json.url,
                        img: json.image[0],
                        title: json.headline,
                        closingDate: closingDate,
                        publisher: 'stylist'
                    };
                    console.log('-----------------------------------------------------------------------');
                    console.log(comp);
                    console.log('-----------------------------------------------------------------------');
                }
            } catch (error) {
                console.log('NOT SCRAPING ', queueItem.url);
            }
        }
    });

stylistCrawler.maxDepth = 2;

// stylistCrawler.start();

var shortlistCrawler = Crawler("https://www.shortlist.com/win/")
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {
        // console.log(queueItem.url);
        if (queueItem.url.match(/.+(\/win|get-|win-).+\d\d+$/i)) {

            let responseStr = responseBuffer.toString("utf8").replace(/\r?\n|\r/g, '');
            try {
                let json = JSON.parse(/({.*})<\/script>/.exec(/json\">(.+)<\/script>/g.exec(responseStr)[1])[1]);

                // let keywords = ['Win', 'Sponsored', 'Events'];

                // if (keywords.some(v => json.keywords.includes(v))) {

                let match = /closes.*((?:\d{1}|\d{2})\/\d{2}\/\d{2})/.exec(responseStr);
                let closingDate = !match ? '' : match[1];
                let comp = {
                    url: json.url,
                    img: json.image[0],
                    title: json.headline,
                    closingDate: closingDate,
                    publisher: 'shortlist'
                };
                console.log('-----------------------------------------------------------------------');
                console.log(comp);
                console.log('-----------------------------------------------------------------------');
                // }
            } catch (error) {
                console.log('NOT SCRAPING ', queueItem.url);
            }
        }
    });

shortlistCrawler.maxDepth = 2;

// shortlistCrawler.start();


var start = new Date();
console.log("BEGIN CRAWLING @" + start);

var mrhydeCrawler = Crawler("https://www.mrhyde.com/")
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {

        if (queueItem.url.match(/.+(competitions|offers).+\d\d+$/i)) {
            console.log('-----------------------------------------------------------------------');
            let responseStr = responseBuffer.toString("utf8").replace(/\r?\n|\r/g, '');
            try {
                let json = JSON.parse(/({.*})<\/script>/.exec(/json\">(.+)<\/script>/g.exec(responseStr)[1])[1]);

                let match = /closes.*((?:\d{1}|\d{2})\/\d{2}\/\d{2})/.exec(responseStr);
                let closingDate = !match ? '' : match[1];
                let comp = {
                    url: json.url,
                    img: json.thumbnailUrl,
                    title: json.headline,
                    closingDate: closingDate,
                    publisher: 'mrhyde'
                };
                console.log('-----------------------------------------------------------------------');
                console.log(comp);
                console.log('-----------------------------------------------------------------------');
                // }
            } catch (error) {
                console.log('NOT SCRAPING ', queueItem.url);
            }
        }
    });

mrhydeCrawler.on('complete', function () {
    let now = new Date();
    console.log("END CRAWLING @" + now + ", execution time in sec :" + (now - start) / 1000 + 's');
});

mrhydeCrawler.maxDepth = 3;

// mrhydeCrawler.start();


var start = new Date();
console.log("BEGIN CRAWLING @" + start);

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

cntravellerCrawler.start();
