import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoachAuthService implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (sessionStorage.cid && sessionStorage.cid.match(/^CI-/)) {
      return true;
    }
    else {
      this.router.navigate(['/coachlogin']);
      return false;
    }
  }
}
