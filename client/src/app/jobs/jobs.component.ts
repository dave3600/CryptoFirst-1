import { Component, OnInit } from '@angular/core';
import {getJobs} from '../../../src/data';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor() { }
  jobs: Job[] = [];
  ngOnInit(): void {
    this.jobs = getJobs();
  }

}
