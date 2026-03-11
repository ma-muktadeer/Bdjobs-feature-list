import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-applied-jobs',
  standalone: true,
  imports: [],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.css'
})
export class AppliedJobsComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('shortlisted-job')
  }
  prev() {
    this.fService.scrollTo('ai-assesment')
  }
}
