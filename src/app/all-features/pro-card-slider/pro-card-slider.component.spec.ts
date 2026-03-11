import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCardSliderComponent } from './pro-card-slider.component';

describe('ProCardSliderComponent', () => {
  let component: ProCardSliderComponent;
  let fixture: ComponentFixture<ProCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProCardSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
