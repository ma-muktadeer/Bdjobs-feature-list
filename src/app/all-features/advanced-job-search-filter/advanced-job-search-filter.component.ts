import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-advanced-job-search-filter',
  standalone: true,
  imports: [],
  templateUrl: './advanced-job-search-filter.component.html',
  styleUrl: './advanced-job-search-filter.component.css'
})
export class AdvancedJobSearchFilterComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('profile-preference')
  }
  prev() {
    this.fService.scrollTo('sms-job-alert')
  }
}
