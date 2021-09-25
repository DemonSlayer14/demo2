import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validAge } from '../shared/age.validator';
import { validMobno } from '../shared/mobno.validator';
import { CoachSignupService } from './coach-signup.service';
import { Signup } from './signup.model';

@Component({
  selector: 'app-coach-signup',
  templateUrl: './coach-signup.component.html',
  styleUrls: ['./coach-signup.component.css']
})
export class CoachSignupComponent implements OnInit {

  formDisplay: boolean = true;

  coachRegisterForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
    dateOfBirth: new FormControl("", [Validators.required, validAge]),
    gender: new FormControl("", [Validators.required]),
    mobileNumber: new FormControl("", [Validators.required, validMobno]),
    speciality: new FormControl("", [Validators.required, Validators.maxLength(50), Validators.minLength(10)])
  })

  get name() {
    return this.coachRegisterForm.get('name');
  }
  get pass() {
    return this.coachRegisterForm.get('password');
  }
  get dob() {
    return this.coachRegisterForm.get('dateOfBirth');
  }
  get sex() {
    return this.coachRegisterForm.get('gender');
  }
  get spec() {
    return this.coachRegisterForm.get('speciality');
  }
  get mobno() {
    return this.coachRegisterForm.get('mobileNumber');
  }

  errMessage: string;
  coachId: string;

  constructor(private crs: CoachSignupService) { }

  ngOnInit() {
  }

  coachregister(crf: FormGroup) {
    console.log(crf.value);
    let input: Signup = new Signup(crf.value);
    input.mobileNumber = parseInt(crf.controls.mobileNumber.value);
    console.log(input);
    this.crs.coachregister(input)
      .subscribe((res) => {
        this.formDisplay = false;
        this.coachId = res.message;
        console.log(`${res.message}`);
      }, (err) => {
        this.errMessage = err.message;
      })
  }
}

