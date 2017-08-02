import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RobotstoreRobotModule } from './robot/robot.module';
@NgModule({
    imports: [
        RobotstoreRobotModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RobotstoreEntityModule {}
