import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (sessionStorage.uid && sessionStorage.uid.match(/^UI-/)) {
      return true;
    }
    else {
      this.router.navigate(['/userlogin']);
      return false;
    }
  }
}
