import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-see-training-details',
  standalone: true,
  imports: [],
  templateUrl: './see-training-details.component.html',
  styleUrl: './see-training-details.component.css'
})
export class SeeTrainingDetailsComponent {
  fService = inject(FeatureService)

  prev() {
    this.fService.scrollTo('easy-apply')
  }
}
