import * as ajax from '../plugins/ajax';

const API_BASE_URL = 'https://0lncgbduy9.execute-api.eu-west-1.amazonaws.com/dev/api/v1';

class Navigation {

    constructor(sources) {
        this.sources = sources['Items'];
        console.log('SOURCES : ' + JSON.stringify(this.sources));
    }

    static getSources() {

        let allSourcesUrl = `${API_BASE_URL}/sources`;
        
        let result = new Promise((resolve, reject) => {
                Promise.all([
                        ajax.getJson(allSourcesUrl, { cache: true, ttl: 60 })
                    ])
                    .then(values => {
                            resolve(new Navigation(values[0]));
                            })
                        .catch(reject);
                    });

            return result;
        }
    }

    export default Navigation;
