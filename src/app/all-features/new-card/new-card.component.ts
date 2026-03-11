
import { Component } from '@angular/core';
interface Item {
  title: string;
  description: string;
  icon: string;
  img: string;
  bgColor: string;
}

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent {

  loopedItems: Item[] = [];

  items = [
    {
      title: 'Web Development',
      description: 'Build modern web applications with Angular',
      icon: 'fa-code', // Font Awesome class
      img: 'assets/images/web-dev.jpg',
      bgColor: '#f0f8ff'
    },
    {
      title: 'Mobile Apps',
      description: 'Create cross-platform mobile applications',
      icon: 'fa-mobile-alt',
      img: 'assets/images/mobile-apps.jpg',
      bgColor: '#fff0f5'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      icon: 'fa-paint-brush',
      img: 'assets/images/ui-ux.jpg',
      bgColor: '#fffaf0'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      icon: 'fa-cloud',
      img: 'assets/images/cloud.jpg',
      bgColor: '#f0fff0'
    },
    {
      title: 'Data Analytics',
      description: 'Powerful insights from your business data',
      icon: 'fa-chart-line',
      img: 'assets/images/data-analytics.jpg',
      bgColor: '#f5f0ff'
    }
  ];
  itemWidth = 300 + 2 * 16; // item + margin x (mx-4 ~ 16px)
  offset = -this.itemWidth; // Start from the real first item
  leftBtn() {
    this.offset += 300;
    console.log('Left button clicked');
  }
  rightBtn() {
    this.offset -= 300;
    console.log('Right button clicked');
  }

  ngOnInit() {
    this.loopedItems = [
      this.items[this.items.length - 1], // Clone of last
      ...this.items,
      this.items[0] // Clone of first
    ];
    this.offset = -this.itemWidth; // Start at first actual item
  }



}
