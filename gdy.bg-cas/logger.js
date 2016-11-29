/*jslint node: true */
'use strict';

var bunyan = require('bunyan');
var prettystream = require('bunyan-prettystream');
var prettyStdOut = new prettystream();
prettyStdOut.pipe(process.stdout);

var logger = bunyan.createLogger({
    name: 'gdybg',
    streams: [{
        level: 'debug',
        type: 'raw',
        stream: prettyStdOut
    }]
});

module.exports = logger;
