var _ = require('lodash');
var moment = require('moment');
var d = new Date();

var day   = d.getDate() + '';
var month = d.getMonth() + 1 + '';
var date  = (day.length > 1 ? day : '0' + day) + "/" + (month.length > 1 ? month : '0' + month) + "/" + d.getFullYear();

var format = 'YYYY-MM-DDT00:00:00.000Z';


var compDate = date;

// moment loses a day, add it back 
var closesByDate = moment(date, format).add(1, 'days').toDate();

console.log(' comp.date ',compDate);
console.log(' closesByDate ', closesByDate);
console.log(' ttl ', +closesByDate);

// calculate days between now and closesByDate
console.log(' daysToEnter ', moment(closesByDate).diff(moment(new Date()), 'days'));
 


// change to current working dir
// process.chdir(__dirname);
// require('./src/scraper').scrape();

var items = [
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/9bbef368-0d1b-5564-af0e-91137be35bb5-160607-abarth-595-124-spider-hp.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.232Z",
    "uri": "http://www.stylist.co.uk/life/meet-your-new-car",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win hospitality tickets to Goodwood Festival of Speed"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/d376aa30-cee8-5423-9362-66f58323fea3-new1.jpg",
    "closesByDate": "2017-07-31T00:00:00.000Z",
    "date": "30/07/17",
    "daysToEnter": 13,
    "createdAt": "2017-07-18T13:54:22.288Z",
    "uri": "http://www.stylist.co.uk/win/win-the-complete-rose-de-mai-collection-from-chantecaille",
    "ttl": 1501459200,
    "source": "stylist",
    "title": "Win the complete Rose de Mai Collection from Chantecaille"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/ad4413d7-bc42-5f06-a369-04f3d87706aa-millys2.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.231Z",
    "uri": "http://www.stylist.co.uk/win/win-a-copy-of-milly-s-real-food-and-a-le-creuset-casserole",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win a copy of Milly’s Real Food and a Le Creuset Casserole worth £220"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/de08c318-10cd-5ed0-8dc6-2989a9b3dd4e-turn-shot.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.049Z",
    "uri": "http://www.stylist.co.uk/promotions/win-500-worth-of-vita-liberata-tanning-goodies",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win £500 worth of Vita Liberata tanning goodies"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/27dd6951-4e9b-5e62-adc7-44e73f15a375-moc1.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.071Z",
    "uri": "http://www.stylist.co.uk/life/a-walk-on-the-wild-side",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win one of 20 exclusive Magnum x Moschino tote bags"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/0e7cba1d-a428-5fb8-9449-a561f2eb71c8-istock-519191290.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.171Z",
    "uri": "http://www.stylist.co.uk/beauty/thehairchannel/the-only-three-steps-you-need-for-fabulous-hair",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win Tangle Teezer's 3 Step Kit and a £50 voucher"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/690971bf-0f69-5e71-ab90-ed0098b09f88-comp-1.JPG",
    "closesByDate": "2017-07-28T00:00:00.000Z",
    "date": "27/07/17",
    "daysToEnter": 10,
    "createdAt": "2017-07-18T13:54:22.070Z",
    "uri": "http://www.stylist.co.uk/win/win-a-pair-of-custom-olivia-fayne-designed-dr-martens",
    "ttl": 1501200000,
    "source": "stylist",
    "title": "Win a pair of custom Olivia-Fayne designed Dr. Martens"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/80c68b4e-008a-55f1-b985-78662f83c3a3-1.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/17",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.170Z",
    "uri": "http://www.stylist.co.uk/win/win-a-luxury-overnight-stay-at-mercure-bristol-grand-hotel",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win a luxury overnight stay at Mercure Bristol Grand Hotel"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/c1e2566e-f580-5bd7-9bca-7fdc4d7b659f-fiestadecolor-jun17-2458-db.JPG",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.169Z",
    "uri": "http://www.stylist.co.uk/promotions/discover-your-spanish-sense-of-adventure-with-campo-viejo",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win a holiday to Spain for two"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/fd6503aa-eecb-5557-9ea8-4ed46e21fb25-star-bath-at-the-tented-suites-1.JPG",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.170Z",
    "uri": "http://www.stylist.co.uk/life/find-your-paradise",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win a five night safari or wellness retreat"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/833c4d8b-94ec-5db4-ade7-111e49444ac9-gettyimages-77136634-980px.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.031Z",
    "uri": "http://www.stylist.co.uk/home/A-gorgeous-garden-with-minimal-effort",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win a hanging chair and Scotts Miracle-Gro products"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/17a88751-bd2f-52ad-98e6-0032dac516ca-fresh-avocado-toasts-601942422-1258x837.jpeg",
    "closesByDate": "2017-08-04T00:00:00.000Z",
    "date": "03/08/17",
    "daysToEnter": 17,
    "createdAt": "2017-07-18T13:54:22.032Z",
    "uri": "http://www.stylist.co.uk/win/win-everything-you-need-to-make-the-perfect-slice-of-toast",
    "ttl": 1501804800,
    "source": "stylist",
    "title": "Win everything you need to make the perfect slice of toast"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/6b22c4ec-561d-51fb-9c5e-72754093465d-page1.jpg",
    "closesByDate": "2017-07-22T00:00:00.000Z",
    "date": "21/07/17",
    "daysToEnter": 4,
    "createdAt": "2017-07-18T13:54:22.068Z",
    "uri": "http://www.stylist.co.uk/win/win-one-of-100-copies-of-eleanor-oliphant-is-completely-fine",
    "ttl": 1500681600,
    "source": "stylist",
    "title": "Win one of 100 copies of Eleanor Oliphant is Completely Fine"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/c069519c-a658-5336-a0c2-2ca86740c881-trajalh-ident-landscapeaw1-use-2.jpg",
    "closesByDate": "2017-07-26T00:00:00.000Z",
    "date": "25/07/17",
    "daysToEnter": 8,
    "createdAt": "2017-07-18T13:54:22.170Z",
    "uri": "http://www.stylist.co.uk/win/win-the-ultimate-hoochie-koochie-pass-with-barbican-frame-and-ace-hotel",
    "ttl": 1501027200,
    "source": "stylist",
    "title": "Win the ultimate Hoochie Koochie pass with Barbican, Frame and Ace Hot"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/a418a49e-b63a-59df-b63e-f9ad0dd83811-untitled-1.jpg",
    "closesByDate": "2017-07-19T00:00:00.000Z",
    "date": "18/07/2017",
    "daysToEnter": 1,
    "createdAt": "2017-07-18T13:54:22.169Z",
    "uri": "http://www.stylist.co.uk/life/wicked-stars-on-their-real-life-friendship",
    "ttl": 1500422400,
    "source": "stylist",
    "title": "Win a pair of tickets to see Wicked"
  },
  {
    "img": "https://s3-eu-west-1.amazonaws.com/swagbag.club-images/ee756009-3d39-5eb9-b57e-5f6c74e02968-ny-gettyimages-511633877.jpg",
    "closesByDate": "2017-07-26T00:00:00.000Z",
    "date": "25/07/17",
    "daysToEnter": 8,
    "createdAt": "2017-07-18T13:54:22.071Z",
    "uri": "http://www.stylist.co.uk/win/win-a-trip-to-the-us-with-american-airlines",
    "ttl": 1501027200,
    "source": "stylist",
    "title": "Win a trip to the US with American Airlines"
  }
];

console.log( _.orderBy(items, function (c) { return c.daysToEnter }, ['asc']));