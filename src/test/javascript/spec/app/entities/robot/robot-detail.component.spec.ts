import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { RobotstoreTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { AppRobotDetailComponent } from '../../../../../../main/webapp/app/entities/robot/robot-detail.component';
import { RobotService } from '../../../../../../main/webapp/app/entities/robot/robot.service';
import { Robot } from '../../../../../../main/webapp/app/entities/robot/robot.model';

describe('Component Tests', () => {

    describe('Robot Management Detail Component', () => {
        let comp: AppRobotDetailComponent;
        let fixture: ComponentFixture<AppRobotDetailComponent>;
        let service: RobotService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [RobotstoreTestModule],
                declarations: [AppRobotDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    RobotService,
                    JhiEventManager
                ]
            }).overrideTemplate(AppRobotDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AppRobotDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RobotService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Robot(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.robot).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
