import Ractive from 'ractive';
import template from '../views/home-page.html';

import HeaderComponent from './components/layout/header';
import NavigationComponent from './components/layout/navigation';
import ContentComponent from './components/layout/content';
import FooterComponent from './components/layout/footer';

import RouterComponent from './components/layout/router';

import * as RouterPlugin from './plugins/router';
import routesConfiguration from './config/routes';

import * as ajax from './plugins/ajax';
const API_BASE_URL = 'https://0lncgbduy9.execute-api.eu-west-1.amazonaws.com/dev/api/v1';

let App = new Ractive({
    el: '#wrapper',
    template: template,
    data: {
        searchTerm: '',
        allcomps: [],
        comps: [],
        sources: [],
        filters: []
    },
    components: {
        Header: HeaderComponent,
        Navigation: NavigationComponent,
        Content: ContentComponent,
        Footer: FooterComponent,
        Router: RouterComponent
    },
    filter(competitions) {

        var filters = this.get('filters');
        console.log('filter by ', JSON.stringify(filters));

        if (filters.length) {
            var filtered = _.filter(competitions, function(comp) {
                if (_.indexOf(filters, comp.source) > -1)
                    return comp;
            });
            return filtered;
        } else {
            return competitions;
        }

    },
    oninit() {

        RouterPlugin.init(routesConfiguration, this.onNavigation.bind(this));

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
                    resolve(this.set('sources', values[0]['Items']));
                })
                .catch(reject);
        });

        this.observe('searchTerm', function(newValue, oldValue, keypath) {
            console.log('search for ' + oldValue + '->' + newValue);
            // console.dir(this.find('#q'));        
            // q.style.background='#E8E316';        

            var searchTerm = new RegExp(_.escapeRegExp(newValue), 'i');
            var allcomps = this.get('allcomps');
            var searchResult = _.filter(allcomps, function(comp) {
                return comp.title.match(searchTerm);
            });

            this.set('comps', this.filter(searchResult));
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
