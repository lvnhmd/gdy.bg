import Ractive from 'ractive';
import Template from '../../../views/content.html';
import * as ajax from '../../plugins/ajax';

var Content = Ractive.components.Content = Ractive.extend({
    template: Template,

    oninit: function () {

        this.observe('req', (request) => {
            if (request.body.userName) {
                // hmm - before being able to set the userName, I have to get it
                this.get('userName');
                this.set('userName', request.body.userName);
            }
        });
    }

});

Content._name = 'Content';
export default Content;
