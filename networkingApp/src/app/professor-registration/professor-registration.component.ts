import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-professor-registration',
  templateUrl: './professor-registration.component.html',
  styleUrls: ['./professor-registration.component.scss']
})
export class ProfessorRegistrationComponent implements OnInit {
  public instructorRegistrationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    teachingExperience: new FormControl(0, Validators.required),
    instructorType: new FormControl('', Validators.required),
    instructorId: new FormControl(''),
    contacts: new FormControl(new Array(), Validators.required),
  })

  public professorRegistrationForm = new FormGroup({
    instructorId: new FormControl(''),
    university: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required)
  })

  public corporateRegistrationForm = new FormGroup({
    instructorId: new FormControl(''),
    company: new FormControl('', Validators.required),
    expertise: new FormControl('', Validators.required)
  })

  private instructorData: any;
  constructor(private readonly authService: AuthenticationService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
    const uuid = uuidv4();
    this.instructorRegistrationForm.patchValue({ "instructorId": uuid });
    this.corporateRegistrationForm.patchValue({ "instructorId": uuid });
    this.professorRegistrationForm.patchValue({ "instructorId": uuid });
    this.instructorRegistrationForm.controls['instructorType'].valueChanges.subscribe(val => {
      if (val == 'Professors') {
        this.corporateRegistrationForm.reset();
      } else {
        this.professorRegistrationForm.reset();
      }
    });
  }

  addUser() {

    this.instructorRegistrationForm.patchValue({ "instructorId": uuidv4() });
    let contactsList = this.instructorRegistrationForm.controls["contacts"].value.split(",");
    this.instructorRegistrationForm.patchValue({ "contacts": contactsList });
    this.instructorData = this.instructorRegistrationForm.value;
    this.authService.postInstructorData(this.instructorData).subscribe(resp => {
      if (this.instructorRegistrationForm.controls['instructorType'].value == 'Professors') {
        this.corporateRegistrationForm.reset();
      } else {
        this.professorRegistrationForm.reset();
      }
      this.instructorRegistrationForm.reset();
      this.router.navigate(['/dashboard']);
      console.log(resp);
    }, err => {
      this.instructorRegistrationForm.reset();
    });
  }

}

