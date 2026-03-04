import { Component, inject, input, signal } from '@angular/core';
import { FeatureService } from '../feature.service';
import { CarouselCardListComponent } from "../carousel-card-list/carousel-card-list.component";

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CarouselCardListComponent],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent {
  fService = inject(FeatureService)
  isHover = signal<boolean>(false);
  featureId = input.required<string>();
  featureHeading = input.required<string>();
  nextSection = input.required<string>();
  featureDescription = input.required<string>();
  featureImage = input.required<string>();
  featureIcon = input.required<string>();
  featureLink = input<string>();

  prevSection = input<string>('');
  showVideoCv = input<boolean>(false);
  imageRight = input<boolean>(false);
  showCarousel = input<boolean>(false);

  ngOnInit() {
    this.fService.featuresID.set('bdjobs-pro')
    console.log(this.fService.featuresID())
  }

  next() {
    this.fService.scrollTo(this.nextSection());

  }
  prev() {
    this.fService.scrollTo(this.prevSection());
  }

  trackHover(bool: boolean) {
    this.isHover.set(bool)
  }
}
