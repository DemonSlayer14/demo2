import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { SolarHeater } from '../shared/SolarHeater';


@Injectable()
export class AllocateServiceService {

  constructor(private http:HttpClient) { }
  
  allocateUrl: string = 'http://localhost:3050/allocate';
   
  
  getData(data:any) : Observable<any> {
    return this.http.post(this.allocateUrl,data);
  }
  
}
