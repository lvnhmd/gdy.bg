import Ractive from 'ractive';
import Template from '../../../views/content.html';
import ContentModel from '../../models/content';

import * as ajax from '../../plugins/ajax';

const API_BASE_URL = 'https://0lncgbduy9.execute-api.eu-west-1.amazonaws.com/dev/api/v1/';


var Content = Ractive.components.Content = Ractive.extend({
    template: Template,

    oninit: function() {

        this.observe('req', (request) => {
            if (request.body.content && request.body.content.comps) {
                this.set('comps', request.body.content.comps);
            }

        });
    }

});
Content._name = 'Content';

export default Content;
