import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor() { }
  @Input() ind:number=-1;
  @Input() job:Job = {
    "id":1,
    "email":"abc@gmail.com",
    "cryptoAddress":"DOWDKSODK22",
    "wallet": 10,
    "description":"",
    "created_at": "05/07/2021",
    "before_photo": "1.jpe",
    "after_photo": "2.jpe",
    "hours": 2,
    "status": "pending",
    "up_vote": 2,
    "down_vote": 1
};

ngOnInit(): void {
}

}
