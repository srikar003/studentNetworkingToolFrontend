import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

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
    studentId: new FormControl('',Validators.required),
    dept: new FormControl('', Validators.required),
    contacts: new FormControl(new Array(), Validators.required),
  })

  private studentData: any;
  constructor(private readonly authService: AuthenticationService, 
    private readonly router:Router) { }

  ngOnInit(): void {
  }

  addUser() {
    console.log(this.studentRegistrationForm.controls["contacts"].value);
    let contactsList = this.studentRegistrationForm.controls["contacts"].value.split(",");
    this.studentRegistrationForm.patchValue({ "contacts": contactsList });
    this.studentData = this.studentRegistrationForm.value;
    this.authService.postStudentData(this.studentData).subscribe(resp => {
      this.studentRegistrationForm.reset();
      // this.router.navigate(['/dashboard']);
      console.log(resp);
    }, err => {
      this.studentRegistrationForm.reset();
    });
  }

  navigateToSignIn(){
    this.router.navigate(['/signin']);
  }

}
