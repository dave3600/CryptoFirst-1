import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobComponent } from './job/job.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsService } from './jobs/jobs.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes:Routes = [
  { path:"", redirectTo:"job", pathMatch:"full"},
  { path:"job", component:JobsComponent},
  { path:"job/:id", component:JobComponent},
  { path:"job/create", component:CreateJobComponent},
  { path:"**", component: PagenotfoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[JobsService]
})
export class AppRoutingModule { }

export const appRoutedComponents = [PagenotfoundComponent, JobsComponent, JobComponent, CreateJobComponent]

