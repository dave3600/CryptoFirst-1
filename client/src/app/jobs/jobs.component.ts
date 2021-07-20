import { Component, OnInit } from '@angular/core';
import {map,first,tap} from 'rxjs/operators';

import { JobsService } from './jobs.service';

import {Job} from 'src/types/Job'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(private jobsService: JobsService) { }
  jobs: Job[] = [];
  ngOnInit(): void {
    this.jobsService.getJobs()
    //.pipe(map<Job[],Job[]>((old:Job[]) => { let neww = []; for (let j of old){ j.proofOfWork.before = this.imgLocation + j.proofOfWork.before; j.proofOfWork.after = this.imgLocation + j.proofOfWork.after; neww.push(j)}; return neww;}))
    .subscribe((jobs) => { // returns Observable of array of job not the job
      Object.assign(this.jobs,jobs)
    });
    console.log(this.jobs)
  }

}
