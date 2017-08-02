import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { AppRobotComponent } from './robot.component';
import { AppRobotDetailComponent } from './robot-detail.component';
import { AppRobotPopupComponent } from './robot-dialog.component';
import { AppRobotDeletePopupComponent } from './robot-delete-dialog.component';

export const robotRoute: Routes = [
    {
        path: 'robot',
        component: AppRobotComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Robots'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'robot/:id',
        component: AppRobotDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Robots'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const robotPopupRoute: Routes = [
    {
        path: 'robot-new',
        component: AppRobotPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Robots'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'robot/:id/edit',
        component: AppRobotPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Robots'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'robot/:id/delete',
        component: AppRobotDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Robots'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
