import Ractive from 'ractive';
import Template from '../../../views/header.html';

var Header = Ractive.components.Header = Ractive.extend({
    template: Template,
    
    oninit: function() {

        this.observe('searchTerm', function(newValue, oldValue, keypath) {
            console.log('search for ' + oldValue + '->' + newValue);
        });
    }



    // header.observe('searchTerm', function(newValue, oldValue, keypath) {
    // 	console.log('search for ' + oldValue + '->' + newValue);
    // 	// console.dir(this.find('#q'));		
    // 	// q.style.background='#E8E316';		

    // 	var searchTerm = new RegExp(_.escapeRegExp(newValue), 'i');
    // 	searchresult = _.filter(allcomps, function(comp) {
    // 		// if(comp.title.match(searchTerm)) console.log(comp.title);		
    // 		return comp.title.match(searchTerm);
    // 	});

    // 	content.set('comps', filter());
    // });

    // navigation.on('filterBySource', function(event) {

    // 	// { background: #E8E316; color: #000; }		

    // 	// console.dir(event.node.style.background);		
    // 	// console.dir(event.node.style.color);		

    // 	var source = navigation.get(event.keypath);
    // 	//if the source is already in the array, remove it the user have clicked on it before and ahve clicked the second time		
    // 	if (_.indexOf(filters, source.name) > -1) {
    // 		_.pull(filters, source.name);
    // 		//change the class		
    // 		event.node.style.background = '';
    // 		event.node.style.color = '';
    // 	}
    // 	//if the source is NOT in the array, ADD it the user have clicked on it for the first time		
    // 	else {
    // 		filters.push(source.name);
    // 		event.node.style.background = '#E0479E';
    // 		event.node.style.color = '#000';
    // 	}

    // 	content.set('comps', filter());

    // });
    //    self.observe('searchTerm', function(newValue, oldValue, keypath) {
    //     console.log('search for ' + oldValue + '->' + newValue);

    // });

});

// Header.observe('searchTerm', function(newValue, oldValue, keypath) {
//     console.log('search for ' + oldValue + '->' + newValue);

// });

Header._name = 'Header';

export default Header;
