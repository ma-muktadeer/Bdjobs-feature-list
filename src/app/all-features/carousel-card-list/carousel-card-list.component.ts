import { Component, output } from '@angular/core';
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel-card-list',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel-card-list.component.html',
  styleUrl: './carousel-card-list.component.css'
})
export class CarouselCardListComponent {
  isHover = output<boolean>();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: true,
    margin: 24,
    navSpeed: 700,
    smartSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1,
        margin: 16,
        dots: true
      },
      400: {
        items: 1.5,
        margin: 16,
        dots: true
      },
      600: {
        items: 2.2,
        margin: 16,
        dots: true
      },
      768: {
        items: 2.5,
        margin: 20,
        dots: false
      },
      1024: {
        items: 3.8,
        margin: 24,
        dots: false
      }
    },
  };
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   margin: 24,
  //   navSpeed: 700,
  //   smartSpeed: 700,
  //   nav: false,
  //   navText: ['<', '>'],
  //   responsive: {
  //     0: { items: 1, margin: 16 },
  //     480: { items: 1.5, margin: 16 },
  //     768: { items: 2.5, margin: 20 },
  //     1024: { items: 3.8, margin: 24 }
  //   },
  // }
  // 0: { items: 1.1, margin: 16 },
  // 400: { items: 1.5, margin: 16 },
  // 600: { items: 2.2, margin: 20 },
  // 740: { items: 3.8, margin: 24 },
  // 940: { items: 3.8, margin: 24 }
  slidesStore: any[] = [
    {
      id: 1,
      image: 'Application_InSight.png',
      alt: 'Application InSight',
      icon: 'Application_InSight.svg',
      title: 'Application InSight',
      description: `Application Boosting is a powerful feature that moves the application to a higher position in 
                    the employer's list, making it more prominent and easier to notice. This increased visibility helps users 
                    stand out among other candidates, significantly improving their chances of catching the employer's attention.`
    },
    {
      id: 2,
      title: 'Application Boosting',
      image: 'Application_Boosting.png',
      alt: 'Application Boosting',
      icon: 'Boost_Application.svg',
      description: `Early Access Job is a special feature for Pro users that lets them see new job postings 6 hours early.
                    This gives Pro members a chance to apply sooner, helping them stand out to employers. By being one of the first to apply, 
                    users can make their application stronger and improve their chances of getting noticed.`
    },
    {
      id: 3,
      title: 'Early Access Job',
      image: 'Early_Access_Job.png',
      alt: 'Early Access Job',
      icon: 'Early_Access_Job.svg',
      description: `Application Insight provides detailed information on a job, including applicant count, your standing based on matching 
                    criteria and experience, common salary expectations, and hiring progress of that job. By reviewing your Application Insight, 
                    you can gain a clear understanding of your eligibility for the job.`
    },
    {
      id: 4,
      title: 'Matching Percentage',
      image: 'Matching_Percentage.png',
      alt: 'Matching Percentage',
      icon: 'Matching_Percentage.svg',
      description: `Direct Message to employer is a feature that allows Bdjobs Pro users to directly reach out to potential employers 
                    through private messages. It helps job seekers introduce themselves, showcase qualifications, and make personal 
                    connections to improve their chances of being noticed and shortlisted.`
    },
    {
      id: 5,
      title: 'Direct Message',
      image: 'Early_Access_Job.png',
      alt: 'Direct Message',
      icon: 'Direct_Message.svg',
      description: `Direct Message to employer is a feature that allows Bdjobs Pro users to directly reach out to potential employers 
                    through private messages. It helps job seekers introduce themselves, showcase qualifications, and make personal 
                    connections to improve their chances of being noticed and shortlisted.`
    },

  ];

  onHoverStart(bool: boolean) {
    this.isHover.emit(bool);
  }
  toggleExpand(slide: any) {
    // if (slide.isExpanded) {
    //   this.slidesStore.forEach(s => s.isExpanded = false);
    // } else {
    //   this.slidesStore.forEach(s => s.isExpanded = false);
    //   slide.isExpanded = !slide.isExpanded;
    // }
  }
}
