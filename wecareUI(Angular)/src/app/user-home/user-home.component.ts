import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { valid7Day } from '../shared/day7.validators';
import { Booking } from './booking.model';
import { UserHomeService } from './user-home.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  filter: string;
  userId: string = sessionStorage.uid;
  coachId: string;
  bookingId: string;
  coachArray: object[];
  userDetails: User;
  appointmentDetails: object[];
  imgUrl: string;
  msg: string;
  ack = {
    rej: false,
    res: false,
    flag: false,
    del: false
  }

  display: {
    home: boolean,
    profile: boolean,
    appt: boolean
  };

  apptFormDisp = {
    resch: false,
    book: false
  }

  appointmentForm: FormGroup = new FormGroup({
    slot: new FormControl("", Validators.required),
    dateOfAppointment: new FormControl("", [Validators.required, valid7Day])
  });

  get slot() {
    return this.appointmentForm.get('slot');
  }
  get doa() {
    return this.appointmentForm.get('dateOfAppointment');
  }

  rescheduleForm: FormGroup = new FormGroup({
    slot: new FormControl("", Validators.required),
    dateOfAppointment: new FormControl("", [Validators.required, valid7Day])
  });

  get rslot() {
    return this.rescheduleForm.get('slot');
  }
  get rdoa() {
    return this.rescheduleForm.get('dateOfAppointment');
  }

  constructor(private uhs: UserHomeService, private router: Router) { }

  allcoaches() {
    this.uhs.allcoaches()
      .subscribe((data) => {
        console.log(data);
        this.coachArray = data;
      }, (err) => {
        this.msg = err.message;
      })
  }

  rescheduleAppointment(rf: FormGroup) {
    let input: Booking = new Booking(rf.value);
    this.uhs.rescheduleAppointment(input, this.bookingId)
      .subscribe((data) => {
        console.log(data);
        this.ack.res = true;
        this.ack.flag = false;
        this.apptFormDisp.resch = false;
      }, (err) => {
        this.ack.rej = true;
        this.msg = err.message;
      })
  }

  confirmAppointment(af: FormGroup) {
    let input: Booking = new Booking(af.value);
    this.uhs.confirmAppointment(input, this.userId, this.coachId)
      .subscribe((data) => {
        console.log(data);
        this.ack.res = true;
        this.ack.flag = true;
        this.apptFormDisp.book = false;
      }, (err) => {
        this.ack.rej = true;
        this.msg = err.message;
      })
  }

  cancel() {
    this.uhs.cancel(this.bookingId)
      .subscribe((data) => {
        console.log(data);
        this.ack.del = true;
        this.display.appt = false;
      }, (err) => {
        this.ack.del = false;
        this.msg = err.message;
      })
  }

  viewDetails() {
    this.uhs.viewDetails(this.userId)
      .subscribe((data) => {
        console.log(data);
        this.userDetails = data;
        this.imgUrl = (this.userDetails.gender == "M") ? "../../assets/Images/male.png" : "../../assets/Images/female.png";
      }, (err) => {
        this.msg = err.message;
      })
  }

  appointments() {
    this.uhs.appointments(this.userId)
      .subscribe((data) => {
        console.log(data);
        this.appointmentDetails = data;
      }, (err) => {
        this.msg = err.message;
      })
  }

  bookAppt(cid: string) {
    this.display = {
      home: false,
      profile: false,
      appt: false
    }
    this.apptFormDisp = {
      book: true,
      resch: false
    }
    this.coachId = cid;
  }

  reschAppt(bid: string) {
    this.display = {
      home: false,
      profile: false,
      appt: false
    }
    this.apptFormDisp = {
      book: false,
      resch: true
    }
    this.bookingId = bid;
    console.log(bid);
  }

  setBid(bid: string) {
    this.bookingId = bid;
  }


  ngOnInit() {
    if (this.router.url == "/userviewprofile") {
      this.display = {
        home: false,
        profile: true,
        appt: false
      }
      this.viewDetails();
    } else if (this.router.url == "/userhome") {
      this.display = {
        home: true,
        profile: false,
        appt: false
      }
      this.allcoaches();
    } else if (this.router.url == "/userappointments") {
      this.display = {
        home: false,
        profile: false,
        appt: true
      }
      this.appointments();
    }
  }

}
