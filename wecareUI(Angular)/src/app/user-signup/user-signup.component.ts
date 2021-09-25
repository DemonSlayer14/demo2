import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validAge } from '../shared/age.validator';
import { validMobno } from '../shared/mobno.validator';
import { UserSignup } from './signup.model';
import { UserSignupService } from './user-signup.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  formDisplay: boolean = true;
  errMessage: string;
  userId: string;

  userRegisterForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    dateOfBirth: new FormControl("", [Validators.required, validAge]),
    mobileNumber: new FormControl("", [Validators.required, validMobno]),
    pincode: new FormControl("", [Validators.required, Validators.pattern(/^[1-9][0-9]{5}/)]),
    city: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    state: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    country: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    gender: new FormControl("", [Validators.required])
  })

  get name() {
    return this.userRegisterForm.get('name');
  }

  get pass() {
    return this.userRegisterForm.get('password');
  }

  get email() {
    return this.userRegisterForm.get('email');
  }

  get sex() {
    return this.userRegisterForm.get('gender');
  }

  get mobno() {
    return this.userRegisterForm.get('mobileNumber');
  }

  get pin() {
    return this.userRegisterForm.get('pincode');
  }

  get country() {
    return this.userRegisterForm.get('country');
  }

  get state() {
    return this.userRegisterForm.get('state');
  }

  get city() {
    return this.userRegisterForm.get('city');
  }

  get dob() {
    return this.userRegisterForm.get('dateOfBirth');
  }
  constructor(private urs: UserSignupService) { }

  ngOnInit() {
  }

  userregister(urf: FormGroup) {
    let input: UserSignup = new UserSignup(urf.value);
    console.log(input);
    input.mobileNumber = parseInt(urf.controls.mobileNumber.value);
    input.pincode = parseInt(urf.controls.pincode.value);
    console.log(input);
    this.urs.userRegister(input)
      .subscribe((res) => {
        this.formDisplay = false;
        this.userId = res.message;
      }, (err) => {
        this.errMessage = err.message;
      })
  }
}
