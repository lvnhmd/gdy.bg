import Ractive from 'ractive';
import Template from '../../../views/navigation.html';
import NavModel from '../../models/navigation';
import * as ajax from '../../plugins/ajax';

var Navigation = Ractive.components.Navigation = Ractive.extend({
    template: Template,

    oninit: function() {

        this.observe('req', (request) => {
            if (request.body.navigation && request.body.navigation.sources) {
                console.log('SET SOURCES ' + request.body.navigation.sources);
                this.set('sources', request.body.navigation.sources);
            }

        });
    }
});

Navigation._name = 'Navigation';

export default Navigation;
