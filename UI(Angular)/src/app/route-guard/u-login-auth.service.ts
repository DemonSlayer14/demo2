import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ULoginAuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (sessionStorage.uid && sessionStorage.uid.match(/^UI-/)) {
      this.router.navigate(['/userhome']);
      return false;
    } else {
      return true;
    }
  }
}
