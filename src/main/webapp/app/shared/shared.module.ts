import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    RobotstoreSharedLibsModule,
    RobotstoreSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    AppLoginModalComponent
} from './';

@NgModule({
    imports: [
        RobotstoreSharedLibsModule,
        RobotstoreSharedCommonModule
    ],
    declarations: [
        AppLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [AppLoginModalComponent],
    exports: [
        RobotstoreSharedCommonModule,
        AppLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RobotstoreSharedModule {}
