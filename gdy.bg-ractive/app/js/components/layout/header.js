import Ractive from 'ractive';
import Template from '../../../views/header.html';
import * as router from '../../plugins/router';

var Header = Ractive.components.Header = Ractive.extend({
    template: Template,

    oninit() {
		this.on('login', (rEvent) => {
			rEvent.original.preventDefault();
			router.navTo(`/login`);
		});
	}
});

Header._name = 'Header';
export default Header;
