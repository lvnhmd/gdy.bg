import Ractive from 'ractive';
import Template from '../../../views/navigation.html';
import * as ajax from '../../plugins/ajax';

var Navigation = Ractive.components.Navigation = Ractive.extend({
    template: Template,

    oninit: function() {

        this.on('addToFilters', function(event) {

            console.log('addToFilters ' +JSON.stringify(event));

            var filters = this.get('filters');

            var source = event.context;
            //if the source is already in the array, remove it the user have clicked on it before and have clicked the second time		
            if (_.indexOf(filters, source) > -1) {
                _.pull(filters, source);
                this.set('filters', filters);
                event.node.style = '';
            }
            //if the source is NOT in the array, ADD it the user have clicked on it for the first time		
            else {
                filters.push(source);
                event.node.style = 'color:#000;background:#E0479E';
            }

            // this.set('filters', filters);
        });
    }


});

Navigation._name = 'Navigation';
export default Navigation;
