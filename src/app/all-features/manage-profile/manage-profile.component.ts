import { Component, inject } from '@angular/core';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.css'
})
export class ManageProfileComponent {
  fService = inject(FeatureService)
  next() {
    this.fService.scrollTo('my-dashboard')
  }
  prev() {
    this.fService.scrollTo('bdjobs-pro')
  }
}
