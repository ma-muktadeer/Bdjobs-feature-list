import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-ai-assesment',
  standalone: true,
  imports: [],
  templateUrl: './ai-assesment.component.html',
  styleUrl: './ai-assesment.component.css'
})
export class AiAssesmentComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('applied-jobs')
  }
  prev() {
    this.fService.scrollTo('online-test')
  }
}
