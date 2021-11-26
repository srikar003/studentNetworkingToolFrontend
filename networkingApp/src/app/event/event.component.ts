import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public addEventForm: any;
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthenticationService) {
    this.addEventForm = fb.group({
      eventId: [''],
      eventName: ['', Validators.required],
      eventDescription: ['', Validators.required],
      instructorId: ['']
    })
  }

  ngOnInit(): void {
  }

  addEvent() {
    this.addEventForm.patchValue({ "eventId": uuidv4() });
    const data = this.addEventForm.value;
    this.authService.addEvent(data).subscribe(val => {
      this.addEventForm.reset();
      console.log(val);
    })
  }
}
