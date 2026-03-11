import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './my-dashboard.component.html',
  styleUrl: './my-dashboard.component.css'
})
export class MyDashboardComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('video-cv')
  }
  prev() {
    this.fService.scrollTo('manage-profile')
  }

}
