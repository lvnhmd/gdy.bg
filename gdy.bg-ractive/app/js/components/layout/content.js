import Ractive from 'ractive';
import Template from '../../../views/content.html';
import * as ajax from '../../plugins/ajax';

var Content = Ractive.components.Content = Ractive.extend({
    template: Template,

    oninit: function () {

        this.observe('req', (request) => {
            console.log('On init content ' + JSON.stringify(request.body));
            if (request.body.content && request.body.content.comps) {
                this.set('comps', request.body.content.comps);
                this.set('userName','piglet');
            }
            if (request.body.userName) {
                console.log('set userName to ' + request.body.userName);
                this.set('userName', request.body.userName);
                // this.update('userName');
                // console.log('this is ' + this);
                // alert('HELLOOOOOO ');
                // alert('userName is ' + this.get('userName'));
                // this.updateModel('userName');
            }
        });
    }

});

Content._name = 'Content';
export default Content;
