import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-video-cv',
  standalone: true,
  imports: [],
  templateUrl: './video-cv.component.html',
  styleUrl: './video-cv.component.css'
})
export class VideoCvComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('customized-cv') 
  }
  prev() {
    this.fService.scrollTo('my-dashboard')
  }
}
