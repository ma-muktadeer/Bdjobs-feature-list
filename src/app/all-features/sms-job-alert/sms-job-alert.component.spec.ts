import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSJobAlertComponent } from './sms-job-alert.component';

describe('SMSJobAlertComponent', () => {
  let component: SMSJobAlertComponent;
  let fixture: ComponentFixture<SMSJobAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SMSJobAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMSJobAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
