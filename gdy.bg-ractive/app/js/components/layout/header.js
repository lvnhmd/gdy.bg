import Ractive from 'ractive';
import Template from '../../../views/header.html';

var Header = Ractive.components.Header = Ractive.extend({
    template: Template
});

Header._name = 'Header';
export default Header;
