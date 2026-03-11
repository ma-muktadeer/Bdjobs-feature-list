import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAssesmentComponent } from './ai-assesment.component';

describe('AiAssesmentComponent', () => {
  let component: AiAssesmentComponent;
  let fixture: ComponentFixture<AiAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAssesmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
