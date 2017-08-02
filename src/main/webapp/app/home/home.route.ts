import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { AppHomeComponent } from './';

export const HOME_ROUTE: Route = {
    path: '',
    component: AppHomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Robot Shopping Store'
    }
};
