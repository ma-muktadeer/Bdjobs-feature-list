import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-my-points',
  standalone: true,
  imports: [],
  templateUrl: './my-points.component.html',
  styleUrl: './my-points.component.css'
})
export class MyPointsComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('employer-activity')
  }
  prev() {
    this.fService.scrollTo('following-employer')
  }
}
