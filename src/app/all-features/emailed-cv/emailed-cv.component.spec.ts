import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailedCvComponent } from './emailed-cv.component';

describe('EmailedCvComponent', () => {
  let component: EmailedCvComponent;
  let fixture: ComponentFixture<EmailedCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailedCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailedCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
