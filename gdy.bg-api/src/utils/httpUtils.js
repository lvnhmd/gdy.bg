/*jslint node: true */
'use strict';
var http = require('http');
var https = require('https');

module.exports.get = function (_host, _path, callback) {

    return http.get({
        host: _host,
        path: _path
    }, function (response) {

        // Continuously update stream with data
        var body = '';
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {

            // Data reception is done, do whatever with it!
            var parsed = {};
            try {
                parsed = JSON.parse(body);
            } catch (e) {
                return callback('can not get ' + _host + _path, null);
            }

            return callback(null, parsed);
        });
    });

};

module.exports.getAsString = function (url, callback) {

    var responseFunction = function (response) {

        // Continuously update stream with data
        var body = '';
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            return callback(null, body);
        });
    };

    if (url.startsWith('https')) {
        return https.get(url, responseFunction);
    }
    else {
        return http.get(url, responseFunction);
    }

}