import { Component, inject, signal } from '@angular/core';
import { FeatureService } from '../feature.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselCardListComponent } from "../carousel-card-list/carousel-card-list.component";


@Component({
  selector: 'app-bdjobs-pro',
  standalone: true,
  imports: [CarouselModule, CarouselCardListComponent],
  templateUrl: './bdjobs-pro.component.html',
  styleUrl: './bdjobs-pro.component.css',
})
export class BdjobsProComponent {
  fService = inject(FeatureService)
  isHover = signal<boolean>(false);

  ngOnInit() {
    this.fService.featuresID.set('bdjobs-pro')
    console.log(this.fService.featuresID())
  }

  next() {
    this.fService.scrollTo('manage-profile')

  }
  trackHover(bool: boolean) {
    this.isHover.set(bool)
  }

}
