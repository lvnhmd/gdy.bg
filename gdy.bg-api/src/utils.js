'use strict';
var logger = require('./logger');

var dateUtils = require('./utils/dateUtils');
var Competition = require('./models/competition');

module.exports.updateClosesByDate = function (event) {
    // Create a function that is triggered by changing the date field 
    // which will then calculate daysToEnter and closesByDate and update the record


    event.Records.forEach(function (record) {

        // logger.info('~~~~~ %j', record.dynamodb, '~~~~~');

        if (record.eventName === 'MODIFY') {

            var newImg = record.dynamodb.NewImage;
            logger.info('>>> ', record.eventName, ' ', newImg.uri.S);
            var oldImg = record.dynamodb.OldImage;

            // compare the old and the new image and   
            // update only if the date has changed
            if (oldImg.show.BOOL && newImg.date.S !== oldImg.date.S) {

                var comp = {
                    uri: newImg.uri.S,
                    title: newImg.title.S,
                    source: newImg.source.S,
                    date: newImg.date.S,
                    img: newImg.img.S,
                    show: newImg.show.BOOL
                };

                dateUtils.setClosingDate(
                    /(?:\d{1}|\d{2})\/(?:\d{1}|\d{2})\/(?:\d{4}|\d{2})/,
                    comp,
                    comp.date);

                Competition.update(comp, function (err, c) {
                    if (err) logger.error(err);
                    logger.info('Updated : ', c.attrs);
                });

            }
        }

    });

};

module.exports.sendEmail = function (event) {

    // Give SES the details and let it construct the message for you.
    client.sendEmail({
        to: 'ali.elvin+aws@gmail.com'
        // from is 'swagbag.club@swagbag.club' only because I want swagbag.club 
        // to appear in the from line as opposed to swagbag only
        , from: 'swagbag.club@swagbag.club'
        , subject: 'Hey You!'
        , message: '<h3>DO YOU REMEMBER ME ?</h3>'
        , altText: 'DO YOU REMEMBER ME ?'
        , replyTo: 'swagbag@swagbag.club'
    }, function (err, data, res) {
        if(err) logger.error(' err ', err);
        logger.info(' sent an email to make sure I am not forgotten ');
        logger.info(' data ', data);
        
    });
};