import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { AppErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: AppErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
    },
    {
        path: 'accessdenied',
        component: AppErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!',
            error403: true
        },
    }
];
