import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-emailed-cv',
  standalone: true,
  imports: [],
  templateUrl: './emailed-cv.component.html',
  styleUrl: './emailed-cv.component.css'
})
export class EmailedCvComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('live-interview')
  }
  prev() {
    this.fService.scrollTo('customized-cv')
  }
}
