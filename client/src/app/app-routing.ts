import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'employer', loadChildren:'./employer/employer.module#EmployerModule'
    },
    {
        path:'jobseeker', loadChildren:'./job-seeker/job-seeker.module#JobSeekerModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
