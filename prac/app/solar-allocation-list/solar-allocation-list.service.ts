import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolarHeater } from '../shared/SolarHeater';

@Injectable({
  providedIn: 'root'
})
export class SolarAllocationListService {

  constructor(private http:HttpClient) { }

  getAllocations() : Observable<number[]>{
    return this.http.get('http://localhost:3050/getSolarHeaterIds') as Observable<number[]>;
  }

  getSolarHeaterbyId(id) : Observable<SolarHeater>{
    console.log('id:',id);
    return this.http.get(`http://localhost:3050/getSolarHeaterIds/${id}`) as Observable<SolarHeater>;
  }
}
