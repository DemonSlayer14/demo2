import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachHomeService } from './coach-home.service';
import { Coach } from './coach.model';

@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {

  coachId: string = sessionStorage.cid;
  coachDetails: Coach;
  showlist: boolean;
  show: boolean;
  scheduleDetails: object[];
  msg: string;
  imgUrl: string;
  noBooking: boolean;

  constructor(private router: Router, private chs: CoachHomeService) { }

  schedules() {
    this.chs.schedules(this.coachId)
      .subscribe(sch => {
        this.scheduleDetails = sch;
        console.log(this.scheduleDetails);
      }, (err) => {
        this.noBooking = true;
        this.showlist = false;
        this.msg = err.message;
      })
  }

  viewDetails() {
    this.chs.viewDetails(this.coachId)
      .subscribe(coach => {
        this.coachDetails = coach;
        console.log(this.coachDetails);
        this.imgUrl = (this.coachDetails.gender == "M") ? "../../assets/Images/male.png" : "../../assets/Images/female.png";
        console.log(this.imgUrl);
      }, (err) => {
        this.msg = err.message;
      })
  }

  ngOnInit() {
    if (this.router.url == "/coachschedules") {
      this.showlist = true;
      this.show = false;
      this.schedules();
    } else if (this.router.url == "/coachviewprofile") {
      this.show = true;
      this.showlist = false;
      this.viewDetails();
    }
  }



}
