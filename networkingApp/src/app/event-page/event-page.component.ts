import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  public eventId: any;
  constructor(private authService: AuthenticationService, private route: ActivatedRoute) {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
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