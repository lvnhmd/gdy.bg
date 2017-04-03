import Ractive from 'ractive';
import Template from '../../../views/login.html';
import * as router from '../../plugins/router';

var Login = Ractive.components.Login = Ractive.extend({
    template: Template,
    
    oninit() {
		this.on('login', (rEvent) => {
			rEvent.original.preventDefault();
			router.navTo(`/login`);
		});
	}

});

Login._name = 'Login';
export default Login;
