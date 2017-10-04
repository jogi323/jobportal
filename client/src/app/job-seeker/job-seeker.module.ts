import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from "ap-angular2-fullcalendar";


import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    CalendarModule
  ],
  declarations: [
    JobSeekerComponent,
    DashboardComponent,
  ]
})
export class JobSeekerModule { }
