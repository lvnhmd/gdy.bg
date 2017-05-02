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

		this.observe('userName', function (newValue, oldValue, keypath) {
			alert(keypath + ' changed to ' + newValue);
		});
	}
});

Header._name = 'Header';
export default Header;
