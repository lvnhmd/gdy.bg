var Crawler = require("simplecrawler");
var cheerio = require("cheerio");

var crawler = Crawler("https://www.stylist.co.uk/win")
    .on("fetchcomplete", function (queueItem, responseBuffer, response) {
        console.log(queueItem.url, responseBuffer.length);
    });
crawler.maxDepth = 2;
crawler.discoverResources = function (responseBuffer, queueItem) {
    var $ = cheerio.load(responseBuffer.toString("utf8"));

    return $("a[href]").map(function () {
        return $(this).attr("href");
    }).get();
};

crawler.start();