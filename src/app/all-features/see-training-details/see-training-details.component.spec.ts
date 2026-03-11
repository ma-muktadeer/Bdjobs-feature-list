import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTrainingDetailsComponent } from './see-training-details.component';

describe('SeeTrainingDetailsComponent', () => {
  let component: SeeTrainingDetailsComponent;
  let fixture: ComponentFixture<SeeTrainingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeTrainingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
