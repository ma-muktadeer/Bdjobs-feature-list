import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-customized-cv',
  standalone: true,
  imports: [],
  templateUrl: './customized-cv.component.html',
  styleUrl: './customized-cv.component.css'
})
export class CustomizedCvComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('emailed-cv')
  }
  prev() {
    this.fService.scrollTo('video-cv')
  }
}
