import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCvComponent } from './customized-cv.component';

describe('CustomizedCvComponent', () => {
  let component: CustomizedCvComponent;
  let fixture: ComponentFixture<CustomizedCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
