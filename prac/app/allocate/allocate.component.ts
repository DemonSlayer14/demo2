import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SolarHeater } from '../shared/SolarHeater';
import { AllocateServiceService } from './allocate-service.service';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {
  allocateForm: FormGroup = new FormGroup({
    distributorName: new FormControl("", [Validators.required]),
    purchaseDate: new FormControl("", [Validators.required]),
    installationDate: new FormControl("", [Validators.required]),
    customerId: new FormControl("", [Validators.required])
  });
  get dn() {
    return this.allocateForm.get('distributorName');
  }
  get cid() {
    return this.allocateForm.get('customerId');
  }
  errorMessage: string;
  successMessage: string;

  constructor(private as: AllocateServiceService) { }



  ngOnInit() {
  }

  register() {
    this.successMessage = "";
    this.errorMessage = "";
    let data: SolarHeater = this.allocateForm.value;
    // {
    //   distributorName : this.allocateForm.controls.distributorName.value,
    //   purchaseDate : new Date(this.allocateForm.controls.purchaseDate.value),
    //   installationDate : new Date(this.allocateForm.controls.installationDate.value),
    //   customerId : parseInt(this.allocateForm.controls.customerId.value)
    // }
    this.as.getData(data)
      .subscribe((res) => {
        this.successMessage = res.message;
        console.log(res);
      }, (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
      })
  }

}
