import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiAlertService } from 'ng-jhipster';

import { Robot } from './robot.model';
import { RobotService } from './robot.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'app-robot',
    templateUrl: './robot.component.html'
})
export class AppRobotComponent implements OnInit, OnDestroy {
robots: Robot[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private robotService: RobotService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.robotService.query().subscribe(
            (res: ResponseWrapper) => {
                this.robots = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInRobots();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Robot) {
        return item.id;
    }
    registerChangeInRobots() {
        this.eventSubscriber = this.eventManager.subscribe('robotListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
