import Ractive from 'ractive';  
import Template from '../../../views/content.html';

var Content = Ractive.components.Content = Ractive.extend({
	template: Template
});
Content._name = 'Content';

export default Content;