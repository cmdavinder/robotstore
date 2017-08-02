import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RobotstoreSharedModule } from '../shared';

import { HOME_ROUTE, AppHomeComponent } from './';

@NgModule({
    imports: [
        RobotstoreSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        AppHomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RobotstoreHomeModule {}
