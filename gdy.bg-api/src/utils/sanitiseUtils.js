/*jslint node: true */
'use strict';
var _ = require('lodash');

module.exports.titleToLowerCase = function (comp) {

    var words = _.split(comp.title, ' ');
    var title = '';
    for (var j in words) {
        var word = words[j];

        if (/^[A-Z]/.test(word)) {
            word = word.charAt(0) + word.substr(1, word.length).toLowerCase();
        }

        title += word + ' ';
    }
    comp.title = title;
}

