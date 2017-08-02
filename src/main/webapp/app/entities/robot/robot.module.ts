import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RobotstoreSharedModule } from '../../shared';
import {
    RobotService,
    RobotPopupService,
    AppRobotComponent,
    AppRobotDetailComponent,
    AppRobotDialogComponent,
    AppRobotPopupComponent,
    AppRobotDeletePopupComponent,
    AppRobotDeleteDialogComponent,
    robotRoute,
    robotPopupRoute,
} from './';

const ENTITY_STATES = [
    ...robotRoute,
    ...robotPopupRoute,
];

@NgModule({
    imports: [
        RobotstoreSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AppRobotComponent,
        AppRobotDetailComponent,
        AppRobotDialogComponent,
        AppRobotDeleteDialogComponent,
        AppRobotPopupComponent,
        AppRobotDeletePopupComponent,
    ],
    entryComponents: [
        AppRobotComponent,
        AppRobotDialogComponent,
        AppRobotPopupComponent,
        AppRobotDeleteDialogComponent,
        AppRobotDeletePopupComponent,
    ],
    providers: [
        RobotService,
        RobotPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RobotstoreRobotModule {}
