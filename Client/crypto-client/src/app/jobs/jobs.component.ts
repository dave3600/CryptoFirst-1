import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor() { }
  jobs:string[] = [""];
  ngOnInit(): void {
    this.jobs = ["first","second","third", "fourth"]
  }

}
