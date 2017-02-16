import * as ajax from '../plugins/ajax';

const API_BASE_URL = 'https://0lncgbduy9.execute-api.eu-west-1.amazonaws.com/dev/api/v1';

class Content {

    constructor(competitions) {
        this.comps = competitions['Items'];
    }

    static getCompetitions() {

        let allCompetitionsUrl = `${API_BASE_URL}/competitions`;

        let result = new Promise((resolve, reject) => {
            Promise.all([
                    ajax.getJson(allCompetitionsUrl, { cache: true, ttl: 60 })
                ])
                .then(values => {
                    resolve(new Content(values[0]));
                })
                .catch(reject);
        });

        return result;
    }
}

export default Content;
