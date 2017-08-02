import { Route } from '@angular/router';

import { RsAppNavbarComponent } from './layouts';

export const navbarRoute: Route = {
    path: '',
    component: RsAppNavbarComponent,
    outlet: 'navbar'
};
