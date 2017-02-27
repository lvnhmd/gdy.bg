import Ractive from 'ractive';
import Template from '../../../views/content.html';
import * as ajax from '../../plugins/ajax';

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
