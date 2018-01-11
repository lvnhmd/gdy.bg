var _ = require('lodash');



// "sanitiseData": "var splits = _.split(data[i].img, ','); var imgUrl = splits[splits.length - 1]; for (var s in splits) { if (splits[s].includes('width')) { var width = +(/\\d{3}/.exec(splits[s])); if (width > 600) { imgUrl = splits[+s + 2]; } } } data[i].img = imgUrl.substring(imgUrl.indexOf('http'), imgUrl.lastIndexOf('\"'));",
var data = [{
    url: 'http://www.cntraveller.com/article/win-a-holiday-to-sri-lanka',
    img: 'https://tr-images.condecdn.net/image/B833p6WVoGx/crop/200/square 200w, https://tr-images.condecdn.net/image/B833p6WVoGx/crop/300/square 300w, https://tr-images.condecdn.net/image/B833p6WVoGx/crop/400/square 400w, https://tr-images.condecdn.net/image/B833p6WVoGx/crop/600/square 600w',
    title: 'Win a week\'s holiday to Sri Lanka with Hoppers ',
    source: 'cntraveller',
    date: '11/01/2018',
    closesByDate: '2018 - 01 - 12T00: 00: 00.000Z',
    ttl: 1515715200
}];
var i=0;

var splits = _.split(data[i].img, ','); data[i].img = _.split(splits[splits.length - 1].trim(),' ')[0];

console.log(data[i].img);