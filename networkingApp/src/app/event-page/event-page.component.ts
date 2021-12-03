import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  public userType: any;
  public isStudentJoined: boolean = false;
  public instructorName: any;
  public eventId: any;
  public events = {
    eventName: '',
    description: ''
  };
  constructor(private authService: AuthenticationService, private route: ActivatedRoute) {
    this.userType = localStorage.getItem('userType');
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.instructorName = this.route.snapshot.paramMap.get('instructorName');
    const payload = { studentId: localStorage.getItem("studentId"), eventId: this.eventId };
    this.authService.getEventInfo(payload).subscribe((resp: any) => {
      this.events = resp.event;
      console.log(this.events);
      this.isStudentJoined = resp.isStudentJoined;
    })
  }

  ngOnInit(): void {
  }

  joinEvent(data: any) {
    const payload = { studentId: localStorage.getItem('studentId'), eventId: data.eventId };
    this.authService.addParticipantsToEvents(payload).subscribe(resp => {
      if (resp == true) {
        //snackbar
      }
    }, err => {
      // err snackbar msg
    })

  }
}