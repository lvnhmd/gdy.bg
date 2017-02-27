import Ractive from 'ractive';  
import Template from '../../../views/footer.html';

var Footer = Ractive.components.Footer = Ractive.extend({
	template: Template
});

Footer._name = 'Footer';
export default Footer;