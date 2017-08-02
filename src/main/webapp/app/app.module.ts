import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { RobotstoreSharedModule, UserRouteAccessService } from './shared';
import { RobotstoreHomeModule } from './home/home.module';
import { RobotstoreAdminModule } from './admin/admin.module';
import { RobotstoreEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    AppMainComponent,
    LayoutRoutingModule,
    RsAppNavbarComponent,
    AppFooterComponent,
    AppErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'rss', separator: '-'}),
        RobotstoreSharedModule,
        RobotstoreHomeModule,
        RobotstoreAdminModule,
        RobotstoreEntityModule,
    ],
    declarations: [
        AppMainComponent,
        RsAppNavbarComponent,
        AppErrorComponent,
        AppFooterComponent
    ],
    providers: [
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ AppMainComponent ]
})
export class RobotstoreAppModule {}
