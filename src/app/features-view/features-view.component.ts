import { Component } from '@angular/core';
import { HeaderComponent } from "../all-features/header/header.component";
import { CommonComponent } from "../all-features/common/common.component";

@Component({
  selector: 'app-features-view',
  standalone: true,
  imports: [HeaderComponent, CommonComponent],
  templateUrl: './features-view.component.html',
  styleUrl: './features-view.component.css'
})
export class FeaturesViewComponent {

}
