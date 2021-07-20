import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { JobsService } from './jobs/jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
