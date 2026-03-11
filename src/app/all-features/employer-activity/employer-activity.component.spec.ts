import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerActivityComponent } from './employer-activity.component';

describe('EmployerActivityComponent', () => {
  let component: EmployerActivityComponent;
  let fixture: ComponentFixture<EmployerActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
