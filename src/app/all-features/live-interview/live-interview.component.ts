import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-live-interview',
  standalone: true,
  imports: [],
  templateUrl: './live-interview.component.html',
  styleUrl: './live-interview.component.css'
})
export class LiveInterviewComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('video-interview')
  }
  prev() {
    this.fService.scrollTo('emailed-cv')
  }
}
