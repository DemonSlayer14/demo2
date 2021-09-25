import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserLoginService } from "./user-login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"],
})
export class UserLoginComponent implements OnInit {
  userLoginForm: FormGroup = new FormGroup({
    id: new FormControl("", Validators.required),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
  });

  isValid: boolean = true;
  errorMessage: string;
  isLoggedIn: string = 'false';

  constructor(private router: Router, private userLS: UserLoginService) { }

  ngOnInit() { }

  get id() {
    return this.userLoginForm.get("id");
  }
  get pass() {
    return this.userLoginForm.get("password");
  }

  userlogin(ulf: FormGroup) {
    let input: { userId: string; password: string } = {
      userId: ulf.controls.id.value,
      password: ulf.controls.password.value,
    };
    this.userLS.userlogin(input)
      .subscribe((res) => {
        console.log(res);
        this.isLoggedIn = 'true';
        sessionStorage.setItem('uid', ulf.controls.id.value);
        this.router.navigate(['/userhome']);
      }, (err) => {
        this.errorMessage = err.message;
        this.isValid = false;
      });
  }
}
