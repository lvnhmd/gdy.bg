import page from 'page';  
import Ractive from 'ractive';
import routesConfiguration from '../config/routes';

function navigationHandler(routeHandler, onNavigation) {  
    return function(context/*, next*/) {
        routeHandler(context, (error, PageComponent = {}, data = {}) => {
            context.pageName = PageComponent._name;
            context.state = data;
            onNavigation(error, context);
        })
    };
}

export function init(routes, onNavigation) {
    
    routes.forEach((routeHandler, path) => {
        page(path, navigationHandler(routeHandler, onNavigation));
    });

    page({
        hashbang: false
    });
}

export function navTo(url, param) {  
    console.log('navTo ' + url);
    console.log('param ' + JSON.stringify(param));
    page.show(url, param);
}