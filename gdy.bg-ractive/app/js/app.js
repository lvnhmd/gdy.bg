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

var slicknavDecorator = function (node, content) {
    var ractive = this;
    var addToFilters = function (item) {
        var source =  item.text();
        var filters = ractive.get('filters');

        //if the source is already in the array, remove it the user have clicked on it before and have clicked the second time		
        if (_.indexOf(filters, source) > -1) {
            _.pull(filters, source);
            ractive.set('filters', filters);
            item.css({ 'color': '', 'background': ''}); 
        }
        //if the source is NOT in the array, ADD it the user have clicked on it for the first time		
        else {
            filters.push(source);
            item.css({ 'color': '#000', 'background': '#E0479E'}); 
        }
    };
    
    return {
        
        update: function (content) {

            var innerHTML = '';
            for (var i in content) {
                innerHTML += ('<li><a>' + content[i] + '</a></li>');
            }
            $(node).html(innerHTML);

            $(node).slicknav({
                onClicked : addToFilters
            });

        },
        teardown: function () {
            node.innerHTML = '';
        }
    };
};
Ractive.decorators.slicknavDecorator = slicknavDecorator;

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
