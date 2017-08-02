import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    RobotstoreSharedLibsModule,
    AppAlertComponent,
    AppAlertErrorComponent
} from './';

@NgModule({
    imports: [
        RobotstoreSharedLibsModule
    ],
    declarations: [
        AppAlertComponent,
        AppAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        RobotstoreSharedLibsModule,
        AppAlertComponent,
        AppAlertErrorComponent
    ]
})
export class RobotstoreSharedCommonModule {}
