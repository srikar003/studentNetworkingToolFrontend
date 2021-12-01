import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public eventList: any;
  public userType: any;
  constructor(private authService: AuthenticationService, private router: Router) {
    this.userType = localStorage.getItem('userType');
    this.authService.getEventsList().subscribe(data => {
      this.eventList = data;
    });
  }

  ngOnInit(): void { }


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

  addEvent() {
    this.router.navigate(['/addEvent'])
  }

}
