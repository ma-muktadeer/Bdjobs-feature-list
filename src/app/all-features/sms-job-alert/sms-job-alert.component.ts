import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-sms-job-alert',
  standalone: true,
  imports: [],
  templateUrl: './sms-job-alert.component.html',
  styleUrl: './sms-job-alert.component.css'
})
export class SMSJobAlertComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('advanced-job-search-filter')
  }
  prev() {
    this.fService.scrollTo('favourite-search')
  }
}
