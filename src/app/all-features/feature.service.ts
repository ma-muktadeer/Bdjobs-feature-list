import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  featuresID = signal('x')

  ngOnInit() {

  }
  scrollTo(nextOrPreviousId: string) {
    const element = document.getElementById(nextOrPreviousId);
    if (element) {
      const offset = 50; // Adjust as needed (e.g. header height)
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }



}
