'use strict';

import router from '../plugins/router';
import HomePage from '../components/layout/home-page';

var routes = new Map();

routes.set('/', (context, next) => {
    next(null, HomePage);
});


export default routes;
