import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-video-interview',
  standalone: true,
  imports: [],
  templateUrl: './video-interview.component.html',
  styleUrl: './video-interview.component.css'
})
export class VideoInterviewComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('g')
  }
  prev() {
    this.fService.scrollTo('emailed-cv')
  }
}
