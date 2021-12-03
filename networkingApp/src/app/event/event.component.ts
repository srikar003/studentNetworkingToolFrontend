import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { v4 as uuidv4 } from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public addEventForm: any;
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthenticationService, private snackBar: MatSnackBar) {
    this.addEventForm = fb.group({
      eventId: [''],
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      instructorId: ['']
    })
  }

  ngOnInit(): void {
  }

  addEvent() {
    const id = localStorage.getItem('instructorId');
    this.addEventForm.patchValue({ "eventId": uuidv4(), instructorId: id });
    const data = this.addEventForm.value;
    this.authService.addEvent(data).subscribe(val => {
      this.addEventForm.reset();
      this.snackBar.open("Event Added Successfully", "Dismiss", { duration: 3000 });
    },
    err => {
      this.snackBar.open("Unable to add Events. Try again later", "Dismiss", { duration: 3000 });
    })
  }
}
