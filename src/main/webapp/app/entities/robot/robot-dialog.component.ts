import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Robot } from './robot.model';
import { RobotPopupService } from './robot-popup.service';
import { RobotService } from './robot.service';

@Component({
    selector: 'app-robot-dialog',
    templateUrl: './robot-dialog.component.html'
})
export class AppRobotDialogComponent implements OnInit {

    robot: Robot;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private robotService: RobotService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.robot.id !== undefined) {
            this.subscribeToSaveResponse(
                this.robotService.update(this.robot));
        } else {
            this.subscribeToSaveResponse(
                this.robotService.create(this.robot));
        }
    }

    private subscribeToSaveResponse(result: Observable<Robot>) {
        result.subscribe((res: Robot) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Robot) {
        this.eventManager.broadcast({ name: 'robotListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'app-robot-popup',
    template: ''
})
export class AppRobotPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private robotPopupService: RobotPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.robotPopupService
                    .open(AppRobotDialogComponent as Component, params['id']);
            } else {
                this.robotPopupService
                    .open(AppRobotDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
