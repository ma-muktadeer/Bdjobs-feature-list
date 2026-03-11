import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-profile-preference',
  standalone: true,
  imports: [],
  templateUrl: './profile-preference.component.html',
  styleUrl: './profile-preference.component.css'
})
export class ProfilePreferenceComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('easy-apply')
  }
  prev() {
    this.fService.scrollTo('advanced-job-search-filter')
  }
}
