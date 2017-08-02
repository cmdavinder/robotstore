import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Robot } from './robot.model';
import { RobotPopupService } from './robot-popup.service';
import { RobotService } from './robot.service';

@Component({
    selector: 'app-robot-delete-dialog',
    templateUrl: './robot-delete-dialog.component.html'
})
export class AppRobotDeleteDialogComponent {

    robot: Robot;

    constructor(
        private robotService: RobotService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.robotService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'robotListModification',
                content: 'Deleted an robot'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'app-robot-delete-popup',
    template: ''
})
export class AppRobotDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private robotPopupService: RobotPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.robotPopupService
                .open(AppRobotDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
