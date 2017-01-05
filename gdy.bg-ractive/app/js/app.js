import Ractive from 'ractive';
import template from '../views/app.html';

// import SearchUserComponent from './components/layout/search-user';
// import HomePageComponent from './components/layout/home-page';
// import UserPageComponent from './components/user/user-page'

import HeaderComponent from './components/layout/header';
import NavigationComponent from './components/layout/navigation';
import ContentComponent from './components/layout/content';
import FooterComponent from './components/layout/footer';

import RouterComponent from './components/layout/router';

import * as RouterPlugin from './plugins/router';
import routesConfiguration from './config/routes';

let App = new Ractive({
    el: '#app',
    template: template,

    // Header: 'components/header.html',
    // Navigation: 'components/navigation.html',
    // Content: 'components/content.html',
    // Footer: 'components/footer.html'

    // SearchUser: SearchUserComponent,
    // HomePage: HomePageComponent,
    // UserPage: UserPageComponent,
    // Router: RouterComponent

    components: {
        Header: HeaderComponent,
        Navigation: NavigationComponent,
        Content: ContentComponent,
        Footer: FooterComponent,
        Router: RouterComponent
    },
    // data: {
    //     componentName: 'HomePage'
    // }
    // ,
    oninit() {
        RouterPlugin.init(routesConfiguration, this.onNavigation.bind(this));
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
