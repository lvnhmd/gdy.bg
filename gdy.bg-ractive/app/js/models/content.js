import * as ajax from '../plugins/ajax';

const API_BASE_URL = 'https://0lncgbduy9.execute-api.eu-west-1.amazonaws.com/dev/api/v1';

class Content {

    constructor(competitions) {
        this.competitions = competitions;

        console.log('-----------------------------------------------------------');
        console.log(JSON.stringify(this));
        console.log('-----------------------------------------------------------');
    }

    static getCompetitions() {

        let allCompetitionsUrl = `${API_BASE_URL}/competitions`;
        console.log('--------------------------allCompetitionsUrl begin---------------------------------');
        console.log(allCompetitionsUrl);
        console.log('-----------------------------allCompetitionsUrl end------------------------------');
        let result = new Promise((resolve, reject) => {
                Promise.all([
                        ajax.getJson(allCompetitionsUrl, { cache: true, ttl: 60 })
                    ])
                    .then(values => {
                            resolve(new Content(values[0]);
                            })
                        .catch(reject);
                    });

            return result;
        }
    }

    export default Content;
