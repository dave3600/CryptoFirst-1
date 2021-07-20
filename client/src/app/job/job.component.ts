import { Component, Input, OnInit } from '@angular/core';

import {Job} from 'src/types/Job'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor() { }
  imgLocation = "assets/images/";
  @Input() ind:number=-1;
  @Input() job:Job = {
    _id : "",
    email: "",
    cryptoAddress: "",
    description:"",
    createdAt : new Date(),
    updatedAt : new Date(),
    hours: 0,
    status: "",
    proofOfWork: {
        before:"",
        after:""
    },
    votes:  {
        up: 0,
        down: 0
    }
};

ngOnInit(): void {
}

}
