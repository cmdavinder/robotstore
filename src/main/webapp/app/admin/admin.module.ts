import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RobotstoreSharedModule } from '../shared';

import {
    adminState,
    AppUserMgmtComponent,
    AppUserDialogComponent,
    AppUserDeleteDialogComponent,
    AppUserMgmtDetailComponent,
    AppUserMgmtDialogComponent,
    AppUserMgmtDeleteDialogComponent,
    AppDocsComponent,
    UserResolvePagingParams,
    UserResolve,
    UserModalService
} from './';

@NgModule({
    imports: [
        RobotstoreSharedModule,
        RouterModule.forRoot(adminState, { useHash: true }),
    ],
    declarations: [
        AppUserMgmtComponent,
        AppUserDialogComponent,
        AppUserDeleteDialogComponent,
        AppUserMgmtDetailComponent,
        AppUserMgmtDialogComponent,
        AppUserMgmtDeleteDialogComponent,
        AppDocsComponent
    ],
    entryComponents: [
        AppUserMgmtDialogComponent,
        AppUserMgmtDeleteDialogComponent,
    ],
    providers: [
        UserResolvePagingParams,
        UserResolve,
        UserModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RobotstoreAdminModule {}
