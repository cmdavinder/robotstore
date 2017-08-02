import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { Robot } from './robot.model';
import { RobotService } from './robot.service';

@Component({
    selector: 'app-robot-detail',
    templateUrl: './robot-detail.component.html'
})
export class AppRobotDetailComponent implements OnInit, OnDestroy {

    robot: Robot;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private robotService: RobotService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInRobots();
    }

    load(id) {
        this.robotService.find(id).subscribe((robot) => {
            this.robot = robot;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInRobots() {
        this.eventSubscriber = this.eventManager.subscribe(
            'robotListModification',
            (response) => this.load(this.robot.id)
        );
    }
}
