var vogels = require('vogels'),
    AWS    = vogels.AWS,
    Joi    = require('joi');

process.chdir(__dirname);
if (process.env.NODE_ENV ==='local') 
  AWS.config.loadFromPath('../credentials_local.json');
else 
  AWS.config.loadFromPath('../credentials.json');

module.exports = vogels.define('sourcemeta', {
  hashKey : 'name',
 
  // add the timestamp attributes (updatedAt, createdAt) 
  timestamps : true,
 
  schema : {
    name        : Joi.string(),
    favicon     : Joi.string(),
    filterBy    : Joi.boolean().default(false)
  }
});