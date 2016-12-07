var vogels = require('vogels'),
    AWS    = vogels.AWS,
    Joi    = require('joi');

process.chdir(__dirname);
if (process.env.NODE_ENV ==='local') 
  AWS.config.loadFromPath('../credentials_local.json');
else 
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
    closes	   : Joi.string(),
    show       : Joi.boolean().default(false)
  }
});