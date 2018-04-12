import { isUndefined } from "util";

var Crawler = require("simplecrawler");
var cheerio = require("cheerio");

var config = JSON.parse(require('fs')
    .readFileSync(__dirname + '/source-config.json', 'utf8'));

// console.log(config['stylist'].title);    
// data[i].url = data[i].url;
//                 data[i].img = data[i].img;
//                 data[i].source = 'stylist';
//                 data[i].title = _.trim(data[i].title).replace(/\r?\n|\r/g, '').substr(0, 95);
//                 ClosingDate
// /json">(.+)<\/script>/U
var crawler = Crawler("https://www.stylist.co.uk/win")
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {

        if (queueItem.url.match(/\d$/i)) {
            console.log('-----------------------------------------------------------------------');
            console.log(queueItem.url);
            let responseStr = responseBuffer.toString("utf8");
            let $ = cheerio.load(responseStr);
            
            console.log($(config['stylist'].title).text());
            let img = $(config['stylist'].img).attr("src")
            console.log(img);
            if(isUndefined(img)) {
                // extract 
            }
            // check the page for a form
            // console.log($(config['stylist'].entryForm).text());
            // this means that we have an entry form therefore is a viable competition 
            if(responseStr.indexOf(config['stylist']['data-widget'])>-1){
                // look for the date with a pattern
                
                let match = new RegExp(config['stylist'].extractDateRegex).exec(responseStr);
                if(null != match)
                    console.log(match[0]);
                else console.log(match);

            }
            // console.log(responseStr.indexOf(config['stylist']['data-widget']));
            console.log('-----------------------------------------------------------------------');
            // Enter now
        }
    });

//     crawler.discoverResources = function (responseBuffer, queueItem) {
//     var $ = cheerio.load(responseBuffer.toString("utf8"));

//     // return $("a[href]").map(function () {
//     //     let url = $(this).attr("href");
//     //     if(url.indexOf('win'))
//     //         return url;
//     // }).get();

//     return $('a[href]').filter(function (i, el) {
//         // this === el
//         return $(this).attr('href').indexOf('win') > 0;
//     }).attr('href');
// };

// crawler.addFetchCondition(function (queueItem, referrerQueueItem, callback) {
//     // callback(null, queueItem.path.match(/win.*\d$/i));
//     callback(null, queueItem.path.match(/\d$/i));
// });

crawler.maxDepth = 2;

crawler.start();