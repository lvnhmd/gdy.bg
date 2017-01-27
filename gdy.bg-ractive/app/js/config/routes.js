'use strict';

import router from '../plugins/router';
import HomePage from '../components/layout/home-page';
import ContentModel from '../models/content';

var routes = new Map();

routes.set('/', (context, next) => {
    next(null, HomePage);
    ContentModel.getCompetitions()
        .then((content) => {
            next(null, HomePage, {
                content: content
            });
        })
        .catch((err) => {
            next(err);
        });
});


export default routes;
