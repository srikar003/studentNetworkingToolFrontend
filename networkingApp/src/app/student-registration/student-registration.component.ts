import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  public studentRegistrationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    college: new FormControl('', Validators.required),
    studentId: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required),
    contacts: new FormControl(new Array(), Validators.required),
  })

  private studentData: any;
  constructor(private readonly authService: AuthenticationService,
    private readonly router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addUser() {
    const contactsList = this.studentRegistrationForm.controls["contacts"].value;
    console.log(contactsList);
    this.studentRegistrationForm.patchValue({ "contacts": contactsList.split(',') });
    this.studentData = this.studentRegistrationForm.value;
    this.authService.postStudentData(this.studentData).subscribe(resp => {
      this.studentRegistrationForm.reset();
      this.snackBar.open("Account created successfully", "Dismiss", { duration: 2000 });
      this.router.navigate(['/signin']);
    }, err => {
    this.studentRegistrationForm.patchValue({ "contacts": contactsList });
      this.snackBar.open("Unable to register now. Please try again later", "Dismiss", { duration: 3000 });
      //  this.studentRegistrationForm.reset();
    });
  }

  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }

}
