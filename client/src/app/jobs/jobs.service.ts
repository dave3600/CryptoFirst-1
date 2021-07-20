import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'


import {Job} from 'src/types/Job'



@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private URL:string;
  constructor(private httpClient:HttpClient) {
    this.URL = "";
  }

  getJobs(){
    this.URL = "http://localhost:3001/job"
    return this.httpClient.get<Job[]>(this.URL);
  }
}
