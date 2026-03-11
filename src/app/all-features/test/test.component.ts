import {
  Component,
  ElementRef,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { consumerMarkDirty } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  // private CARD_WIDTH: number = 284 + 36; // 302px width + 40px gap


  // @ViewChild('leftBtn') leftBtn!: ElementRef<HTMLImageElement>;
  // @ViewChild('rightBtn') rightBtn!: ElementRef<HTMLImageElement>;

  private readonly CARD_WIDTH: number = 284 + 8;
  @ViewChild('featureContainer') featureContainer!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    console.log();
    const scrollContainer = this.featureContainer.nativeElement;
    scrollContainer.scrollTo({
      left: -this.CARD_WIDTH, // Move left by CARD_WIDTH
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const currentScrollLeft = this.featureContainer.nativeElement.scrollLeft;
    this.featureContainer.nativeElement.scrollTo({
      left: currentScrollLeft + this.CARD_WIDTH, // Add card width for right scroll
      behavior: 'smooth',
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('Left Button:', this.leftBtn.nativeElement);
    // console.log('Right Button:', this.rightBtn.nativeElement);

  }
}
