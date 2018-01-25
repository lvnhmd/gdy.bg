'use strict';

const api = require('./src/api.js');
const scraper = require('./src/scraper.js');

const httpUtils = require('./src/utils/httpUtils.js');

function cbw(cb) {
    return function (err, res) {
        if (err) {
            cb(err);
        } else {
            if (typeof res === 'object' && res.hasOwnProperty('body')) {
                cb(null, res.body);
            } else {
                cb(null, {});
            }
        }
    };
}


scraper.scrape();

// httpUtils.getAsString('https://www.stylist.co.uk/win', function (err, content) {
//     var regexp = /window.__ASYNC_PROPS__ = \[{\"data\":\[(.*)\]}\]<\/script>/i;
//     if (content.indexOf('window.__ASYNC_PROPS__ = ') > -1) {
//         var match = regexp.exec(content);
//         var json = JSON.parse(match[1]);
//         var data = [];
//         for (var i = 0; i < json.acf.widgets.length; i++) {
//             for (var j = 0; j < json.acf.widgets[i].posts.length; j++) {

//                 var comp = {};
//                 var url = json.acf.widgets[i].posts[j].link;
//                 if (typeof json.acf.widgets[i].posts[j].acf.category.name !== 'undefined' &&
//                     json.acf.widgets[i].posts[j].acf.category.name.toLowerCase() == 'win') {
//                     comp.url = url.startsWith('http') ?  url : 'https://www.stylist.co.uk' + url;
//                     comp.title = json.acf.widgets[i].posts[j].title.rendered;
//                     comp.img = json.acf.widgets[i].posts[j].acf.hero_images[0].url;
//                     // console.log(comp);
//                     data.push(comp);


//                     // for each of the competitions invoke 
//                     // https://api.parsely.com/v2/related?apikey=stylist.co.uk&boost=views&limit=10
//                     // &sort=score&pub_date_start=7d&page=1
//                     // &url=https%3A%2F%2Fwww.stylist.co.uk%2Fwin%2Fwin-a-vintage-drinks-trolley-and-25-gift-card-for-bills-glamcake-day%2F183638
//                 }
//             }
//         }
//         console.log(data);
//     }
// });
