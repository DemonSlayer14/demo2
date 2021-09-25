import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoachAuthService } from "./route-guard/coach-auth.service";
import { CoachHomeComponent } from "./coach-home/coach-home.component";
import { CoachLoginComponent } from "./coach-login/coach-login.component";
// import { CoachProfileComponent } from "./coach-profile/coach-profile.component";
import { CoachSignupComponent } from "./coach-signup/coach-signup.component";
import { HomeComponent } from "./home/home.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
// import { UserAppointmentComponent } from "./user-appointment/user-appointment.component";
import { UserAuthService } from "./route-guard/user-auth.service";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
// import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { ULoginAuthService } from "./route-guard/u-login-auth.service";
import { CLoginAuthService } from "./route-guard/c-login-auth.service";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "userlogin", component: UserLoginComponent, canActivate: [ULoginAuthService] },
  { path: "usersignup", component: UserSignupComponent },
  { path: "userhome", component: UserHomeComponent, canActivate: [UserAuthService] },
  { path: "userviewprofile", component: UserHomeComponent, canActivate: [UserAuthService] },
  { path: "userappointments", component: UserHomeComponent, canActivate: [UserAuthService] },
  { path: "coachlogin", component: CoachLoginComponent, canActivate: [CLoginAuthService] },
  { path: "coachsignup", component: CoachSignupComponent },
  { path: "coachschedules", component: CoachHomeComponent, canActivate: [CoachAuthService] },
  { path: "coachviewprofile", component: CoachHomeComponent, canActivate: [CoachAuthService] },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
