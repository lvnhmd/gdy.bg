import Ractive from 'ractive';
import template from '../views/app.html';

import HeaderComponent from './components/layout/header';
import NavigationComponent from './components/layout/navigation';
import ContentComponent from './components/layout/content';
import FooterComponent from './components/layout/footer';

import RouterComponent from './components/layout/router';

import * as RouterPlugin from './plugins/router';
import routesConfiguration from './config/routes';

import * as ajax from './plugins/ajax';
const API_BASE_URL = 'https://dev.gdy.bg/api/v1';

import LoginComponent from './components/layout/login';

let App = new Ractive({
    el: '#app',
    template: template,
    data: {
        searchTerm: '',
        allcomps: [],
        comps: [],
        sources: [],
        filters: [],
        componentName: 'EmptyPage'
    },
	oncomplete() {
		// Wait for the app to be rendered so we properly handle transition
		// from EmptyPage to the one the URL dictates
		RouterPlugin.init(routesConfiguration, this.onNavigation.bind(this));
		console.log('App::oninit# Application initialized!');
	},
    components: {
        Header: HeaderComponent,
        Navigation: NavigationComponent,
        Content: ContentComponent,
        Footer: FooterComponent,
        Router: RouterComponent,
        Login: LoginComponent
        ,
        EmptyPage: Ractive.extend({ template: '' })
    },

    filter(competitions) {

        var filters = this.get('filters');

        if (filters.length) {
            competitions = _.filter(competitions, function (comp) {
                if (_.indexOf(filters, comp.source) > -1)
                    return comp;
            });
        }

        var searchTerm = this.get('searchTerm');
        // make search case in-sensitive
        competitions = _.filter(competitions, function (comp) {
            return comp.title.toLowerCase().match(searchTerm.toLowerCase());
        });

        return competitions;

    },

    oninit() {

        // RouterPlugin.init(routesConfiguration, this.onNavigation.bind(this));

        let allCompetitionsUrl = `${API_BASE_URL}/competitions`;

        let result = new Promise((resolve, reject) => {
            Promise.all([
                ajax.getJson(allCompetitionsUrl, { cache: true, ttl: 60 })
            ])
                .then(values => {
                    resolve(this.set('comps', values[0]['Items']),
                        this.set('allcomps', values[0]['Items']));
                })
                .catch(reject);
        });

        let allSourcesUrl = `${API_BASE_URL}/sources`;

        result = new Promise((resolve, reject) => {
            Promise.all([
                ajax.getJson(allSourcesUrl, { cache: true, ttl: 60 })
            ])
                .then(values => {
                    resolve(this.set('sources', _.map(values[0]['Items'], 'name')));
                })
                .catch(reject);
        });

        this.observe('searchTerm', function (newValue, oldValue, keypath) {

            console.log('search for ' + oldValue + '->' + newValue);

            this.set('comps', this.filter(this.get('allcomps')));
        });

        this.observe('filters', function (newValue, oldValue, keypath) {

            console.log('in filters' + JSON.stringify(this.get('filters')));

            this.set('comps', this.filter(this.get('allcomps')));

        });

        console.log('App::oninit# Application initialized!');
    },
    
    onNavigation(error, navigationContext) {
        
        console.log('APP::onNavigation# Navigating to:', navigationContext.pageName, 'with context:', navigationContext);

        if (error) {
            console.warn('App::onNavigation# Error navigating:', error);
        } else {
            this.set({
                req: {
                    params: navigationContext.params,
                    body: navigationContext.state
                },
                componentName: navigationContext.pageName
            });
        }
    }
});

export default App;
