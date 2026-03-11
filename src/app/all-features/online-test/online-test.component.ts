import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-online-test',
  standalone: true,
  imports: [],
  templateUrl: './online-test.component.html',
  styleUrl: './online-test.component.css'
})
export class OnlineTestComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('ai-assesment')
  }
  prev() {
    this.fService.scrollTo('general-interview')
  }
}
