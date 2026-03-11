import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-employer-activity',
  standalone: true,
  imports: [],
  templateUrl: './employer-activity.component.html',
  styleUrl: './employer-activity.component.css'
})
export class EmployerActivityComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('favourite-search')
  }
  prev() {
    this.fService.scrollTo('my-points')
  }
}
