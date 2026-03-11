import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-favourite-search',
  standalone: true,
  imports: [],
  templateUrl: './favourite-search.component.html',
  styleUrl: './favourite-search.component.css'
})
export class FavouriteSearchComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('sms-job-alert')
  }
  prev() {
    this.fService.scrollTo('employer-activity')
  }
}
