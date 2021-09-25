import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CoachSignupComponent } from "./coach-signup/coach-signup.component";
import { CoachLoginComponent } from "./coach-login/coach-login.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserSignupComponent } from "./user-signup/user-signup.component";
import { CoachHomeComponent } from "./coach-home/coach-home.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { SearchCoachPipe } from './search-coach.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachSignupComponent,
    CoachLoginComponent,
    UserLoginComponent,
    UserSignupComponent,
    CoachHomeComponent,
    UserHomeComponent,
    SearchCoachPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
