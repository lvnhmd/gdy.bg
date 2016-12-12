var Competition = require('./models/competition');

function getCompetitions(req, res) {

  Competition.scan().exec(function(err, data) {
    if (err) logger.error(err);
   
    return res.json(data);
  });

}

module.exports = {
  getCompetitions
};
