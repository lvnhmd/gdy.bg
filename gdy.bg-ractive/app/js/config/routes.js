'use strict';

import router from '../plugins/router';
import ContentPage from '../components/layout/content';
import LoginPage from '../components/layout/login';

var routes = new Map();

routes.set('/', (context, next) => {
    console.log('SET ROUTE /');
    console.log('CONTEXT ' + JSON.stringify(context));
    // next (error, )
    next(null, ContentPage, context.state);
});

routes.set('/login', (context, next) => {
    console.log('SET ROUTE LOGIN');
    next(null, LoginPage);
});

export default routes;
