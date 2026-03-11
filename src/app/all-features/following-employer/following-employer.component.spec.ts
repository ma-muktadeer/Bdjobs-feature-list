import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingEmployerComponent } from './following-employer.component';

describe('FollowingEmployerComponent', () => {
  let component: FollowingEmployerComponent;
  let fixture: ComponentFixture<FollowingEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
