import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdjobsProComponent } from './bdjobs-pro.component';

describe('BdjobsProComponent', () => {
  let component: BdjobsProComponent;
  let fixture: ComponentFixture<BdjobsProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BdjobsProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdjobsProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
