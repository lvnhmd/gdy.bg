import page from 'page';  
import Ractive from 'ractive';

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
    console.log('routes ' + JSON.stringify(routes));
    routes.forEach((routeHandler, path) => {
        page(path, navigationHandler(routeHandler, onNavigation));
    });

    page({
        hashbang: false
    });
}

export function navTo(url) {  
    console.log('navTo ' + url);
    page.show(url);
}