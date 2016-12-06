var Competition = require('./models/competition');

function getCompetitions(req, res) {

  Competition.scan().exec(function(err, data) {
    if (err) logger.error(err);
    // console.log(JSON.stringify(data));

    // data.unshift({
    // 	version: 'TEST 9'
    // });

    return res.json(data);
  });

}

module.exports = {
  getCompetitions
};
