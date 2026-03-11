import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-card-slider',
  standalone: true,
  imports: [],
  templateUrl: './pro-card-slider.component.html',
  styleUrl: './pro-card-slider.component.css',
})
export class ProCardSliderComponent {
  currentIndex: number = 0; // To track the current card index

  // Define the data for the cards
  proCards = [
    {
      image:
        './bdjobs.com __ Largest Job Site in Bangladesh_files/bdj-sub-Application-insight.png',
      icon: './bdjobs.com __ Largest Job Site in Bangladesh_files/bdj-sub-icon-Application-Insight.png',
      title: 'Application InSight',
      description:
        'Direct Message to employer is a feature that allows Bdjobs Pro users to directly reach out to potential employers through private messages. It helps job seekers introduce themselves, showcase qualifications, and make personal connections to improve their chances of being noticed and shortlisted.',
    },
    {
      image:
        './bdjobs.com __ Largest Job Site in Bangladesh_files/bdj-sub-Boost-Application.png',
      icon: './bdjobs.com __ Largest Job Site in Bangladesh_files/bdj-sub-icon-Boost-Application.png',
      title: 'Application Boosting',
      description:
        "Application Boosting is a powerful feature that moves the application to a higher position in the employer's list, making it more prominent and easier to notice. This increased visibility helps users stand out among other candidates, significantly improving their chances of catching the employer's attention.",
    },
    {
      image:
        './bdjobs.com __ Largest Job Site in Bangladesh_files/bdj-sub-Direct-Message.png',
      icon: './bdjobs.com __ Largest Job Site in Bangladesh/files/bdj-sub-icon-Direct-Message.png',
      title: 'Early Access Job',
      description:
        'Direct Message to employer is a feature that allows Bdjobs Pro users to directly reach out to potential employers through private messages. It helps job seekers introduce themselves, showcase qualifications, and make personal connections to improve their chances of being noticed and shortlisted.',
    },
    {
      image:
        './bdjobs.com __ Largest Job Site in Bangladesh/files/bdj-sub-Application-insight.png',
      icon: './bdjobs.com __ Largest Job Site in Bangladesh/files/bdj-sub-icon-Application-Insight.png',
      title: 'Matching Percentage',
      description:
        'Direct Message to employer is a feature that allows Bdjobs Pro users to directly reach out to potential employers through private messages. It helps job seekers introduce themselves, showcase qualifications, and make personal connections to improve their chances of being noticed and shortlisted.',
    },
    {
      image:
        './bdjobs.com __ Largest Job Site in Bangladesh/files/bdj-sub-Application-insight.png',
      icon: './bdjobs.com __ Largest Job Site in Bangladesh/files/bdj-sub-icon-Application-Insight.png',
      title: 'Direct Message',
      description:
        'Direct Message to employer is a feature that allows Bdjobs Pro users to directly reach out to potential employers through private messages. It helps job seekers introduce themselves, showcase qualifications, and make personal connections to improve their chances of being noticed and shortlisted.',
    },
  ];

  // Method to navigate the slider
  navigate(direction: 'prev' | 'next'): void {
    if (direction === 'next' && this.currentIndex < this.proCards.length - 1) {
      this.currentIndex++;
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
