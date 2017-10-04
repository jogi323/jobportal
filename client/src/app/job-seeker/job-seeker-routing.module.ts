import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobSeekerComponent } from './job-seeker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'', 
    // component:JobSeekerComponent, 
    children:[
      {path:'', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
