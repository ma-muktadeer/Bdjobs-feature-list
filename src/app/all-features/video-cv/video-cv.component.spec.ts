import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCvComponent } from './video-cv.component';

describe('VideoCvComponent', () => {
  let component: VideoCvComponent;
  let fixture: ComponentFixture<VideoCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
