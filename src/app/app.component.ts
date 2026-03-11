import { Component } from '@angular/core';

import { BdjobsProComponent } from './all-features/bdjobs-pro/bdjobs-pro.component';
import { ManageProfileComponent } from './all-features/manage-profile/manage-profile.component';
import { MyDashboardComponent } from './all-features/my-dashboard/my-dashboard.component';
import { VideoCvComponent } from "./all-features/video-cv/video-cv.component";
import { CustomizedCvComponent } from "./all-features/customized-cv/customized-cv.component";
import { EmailedCvComponent } from "./all-features/emailed-cv/emailed-cv.component";
import { LiveInterviewComponent } from "./all-features/live-interview/live-interview.component";
import { VideoInterviewComponent } from "./all-features/video-interview/video-interview.component";
import { GeneralInterviewComponent } from "./all-features/general-interview/general-interview.component";
import { OnlineTestComponent } from "./all-features/online-test/online-test.component";
import { AiAssesmentComponent } from "./all-features/ai-assesment/ai-assesment.component";
import { AppliedJobsComponent } from "./all-features/applied-jobs/applied-jobs.component";
import { ShortlistedJobComponent } from "./all-features/shortlisted-job/shortlisted-job.component";
import { FollowingEmployerComponent } from "./all-features/following-employer/following-employer.component";
import { FavouriteSearchComponent } from "./all-features/favourite-search/favourite-search.component";
import { SMSJobAlertComponent } from "./all-features/sms-job-alert/sms-job-alert.component";
import { AdvancedJobSearchFilterComponent } from "./all-features/advanced-job-search-filter/advanced-job-search-filter.component";
import { ProfilePreferenceComponent } from "./all-features/profile-preference/profile-preference.component";
import { EasyApplyComponent } from "./all-features/easy-apply/easy-apply.component";
import { SeeTrainingDetailsComponent } from "./all-features/see-training-details/see-training-details.component";
import { MyPointsComponent } from "./all-features/my-points/my-points.component";
import { EmployerActivityComponent } from "./all-features/employer-activity/employer-activity.component";
import { HeaderComponent } from "./all-features/header/header.component";
import { CommonComponent } from "./all-features/common/common.component";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BdjobsProComponent,
    ManageProfileComponent,
    MyDashboardComponent,
    VideoCvComponent,
    CustomizedCvComponent,
    EmailedCvComponent,
    LiveInterviewComponent,
    VideoInterviewComponent,
    GeneralInterviewComponent,
    OnlineTestComponent,
    AiAssesmentComponent,
    AppliedJobsComponent,
    ShortlistedJobComponent,
    FollowingEmployerComponent,
    FavouriteSearchComponent,
    SMSJobAlertComponent,
    AdvancedJobSearchFilterComponent,
    ProfilePreferenceComponent,
    EasyApplyComponent,
    SeeTrainingDetailsComponent,
    MyPointsComponent,
    EmployerActivityComponent,
    HeaderComponent,
    CommonComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})



export class AppComponent {
  title = 'bdjFeatures';

}
