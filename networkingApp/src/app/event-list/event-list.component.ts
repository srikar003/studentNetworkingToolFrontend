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

  viewEvent(data: any) {
    this.router.navigate(['/eventId', { eventId: data.eventId, instructorName: data.fullName }]);
  }

  addEvent() {
    this.router.navigate(['/addEvent'])
  }

}
