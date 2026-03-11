import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedJobSearchFilterComponent } from './advanced-job-search-filter.component';

describe('AdvancedJobSearchFilterComponent', () => {
  let component: AdvancedJobSearchFilterComponent;
  let fixture: ComponentFixture<AdvancedJobSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedJobSearchFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedJobSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
