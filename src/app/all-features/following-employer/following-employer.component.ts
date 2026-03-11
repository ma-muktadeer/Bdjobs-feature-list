import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-following-employer',
  standalone: true,
  imports: [],
  templateUrl: './following-employer.component.html',
  styleUrl: './following-employer.component.css'
})
export class FollowingEmployerComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('my-points')
  }
  prev() {
    this.fService.scrollTo('shortlisted-job')
  }
}
