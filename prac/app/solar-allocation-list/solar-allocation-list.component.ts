import { Component, OnInit } from '@angular/core';
import { SolarAllocationListService } from './solar-allocation-list.service';
import { SolarHeater } from '../shared/SolarHeater';

@Component({
  selector: 'app-solar-allocation-list',
  templateUrl: './solar-allocation-list.component.html',
  styleUrls: ['./solar-allocation-list.component.css']
})
export class SolarAllocationListComponent implements OnInit {

  constructor(private ss:SolarAllocationListService) { }

solarHeaterIds: number[] = [];
selectedSolar: SolarHeater;
selectedId;
errorMessage; 

  ngOnInit() {
    this.getAllId();
  }

  displaySelected() {
    this.errorMessage="";
    this.ss.getSolarHeaterbyId(this.selectedId)
      .subscribe((res)=>{
        console.log(res);
        this.selectedSolar=res;
      },(err)=>{
        console.log('Error!',err);
        this.errorMessage=err.error.message;
      })
  }

  getAllId() {
    this.errorMessage="";
    this.ss.getAllocations()
      .subscribe((res)=>{
        console.log(res);
        this.solarHeaterIds=res;
      },(err)=>{
        console.log(err);
        this.errorMessage=err.error.message;
      })
  }

}
