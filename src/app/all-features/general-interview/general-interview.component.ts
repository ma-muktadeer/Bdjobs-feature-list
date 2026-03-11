import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-general-interview',
  standalone: true,
  imports: [],
  templateUrl: './general-interview.component.html',
  styleUrl: './general-interview.component.css'
})
export class GeneralInterviewComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('online-test')
  }
  prev() {
    this.fService.scrollTo('video-interview')
  }
}
