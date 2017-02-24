import Ractive from 'ractive';
import Template from '../../../views/navigation.html';
import NavModel from '../../models/navigation';
import * as ajax from '../../plugins/ajax';

var Navigation = Ractive.components.Navigation = Ractive.extend({
    template: Template,

    oninit: function() {

        // this.on('filterBySource', function(event) {

        //     // { background: #E8E316; color: #000; }		

        //     // console.dir(event.node.style.background);		
        //     // console.dir(event.node.style.color);		

        //     var source = this.get(event.keypath);
        //     //if the source is already in the array, remove it the user have clicked on it before and ahve clicked the second time		
        //     if (_.indexOf(filters, source.name) > -1) {
        //         _.pull(filters, source.name);
        //         //change the class		
        //         event.node.style.background = '';
        //         event.node.style.color = '';
        //     }
        //     //if the source is NOT in the array, ADD it the user have clicked on it for the first time		
        //     else {
        //         filters.push(source.name);
        //         event.node.style.background = '#E0479E';
        //         event.node.style.color = '#000';
        //     }

        //     content.set('comps', filter());

        // });
    }
});

Navigation._name = 'Navigation';

export default Navigation;
