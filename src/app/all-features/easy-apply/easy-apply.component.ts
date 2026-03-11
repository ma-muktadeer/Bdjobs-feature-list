import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-easy-apply',
  standalone: true,
  imports: [],
  templateUrl: './easy-apply.component.html',
  styleUrl: './easy-apply.component.css'
})
export class EasyApplyComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('see-training-details')
  }
  prev() {
    this.fService.scrollTo('profile-preference')
  }
}
