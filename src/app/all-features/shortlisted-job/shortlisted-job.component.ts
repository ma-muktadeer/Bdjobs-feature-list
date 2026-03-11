import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-shortlisted-job',
  standalone: true,
  imports: [],
  templateUrl: './shortlisted-job.component.html',
  styleUrl: './shortlisted-job.component.css'
})
export class ShortlistedJobComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('following-employer')
  }
  prev() {
    this.fService.scrollTo('applied-jobs')
  }
}
