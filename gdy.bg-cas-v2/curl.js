var request = require('request');

var options = {
    url: 'https://www.stylist.co.uk/win'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
