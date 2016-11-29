var vogels = require('vogels'),
    AWS    = vogels.AWS,
    Joi    = require('joi');

process.chdir(__dirname);
AWS.config.loadFromPath('../credentials.json');

module.exports = vogels.define('competition', {
  hashKey : 'uri',
 
  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps : true,
 
  schema : {
    uri        : Joi.string(),
    img        : Joi.string(),
    title	     : Joi.string(),
    source	   : Joi.string(),
    closes	   : Joi.date(),
    show       : Joi.boolean().default(false)
  }
});