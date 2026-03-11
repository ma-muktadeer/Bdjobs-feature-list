import { Routes } from '@angular/router';
import { FeaturesViewComponent } from './features-view/features-view.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AppComponent
    // }

    {
        path: '', loadComponent: () => FeaturesViewComponent, pathMatch: 'full'
    }
];
