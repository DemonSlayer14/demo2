import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoachLoginService } from './coach-login.service';

@Component({
  selector: 'app-coach-login',
  templateUrl: './coach-login.component.html',
  styleUrls: ['./coach-login.component.css']
})
export class CoachLoginComponent {

  coachLoginForm: FormGroup = new FormGroup({
    id: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(5)])
  });

  get id() {
    return this.coachLoginForm.get('id');
  }
  get password() {
    return this.coachLoginForm.get('password');
  }

  isValid: boolean = true;
  errorMessage: string;

  constructor(private router: Router, private cls: CoachLoginService) { }

  coachlogin(clf: FormGroup) {
    let input = {
      coachId: clf.controls.id.value,
      password: clf.controls.password.value
    }
    this.cls.coachlogin(input)
      .subscribe((res) => {
        sessionStorage.setItem('cid', clf.controls.id.value);
        this.router.navigate(['/coachschedules'])
      }, (err) => {
        this.isValid = false;
        this.errorMessage = err.message;
      });
  }


}
