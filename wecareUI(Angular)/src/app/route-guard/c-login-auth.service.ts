import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CLoginAuthService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (sessionStorage.cid && sessionStorage.cid.match(/^CI-/)) {
            this.router.navigate(['/coachschedules']);
            return false;
        } else {
            return true;
        }
    }
}