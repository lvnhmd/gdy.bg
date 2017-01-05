import Ractive from 'ractive';  
import Template from '../../../views/navigation.html';

var Navigation = Ractive.components.Navigation = Ractive.extend({
	template: Template
});
Navigation._name = 'Navigation';

export default Navigation;