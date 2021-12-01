import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { v4 as uuidv4 } from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public addCourseForm: any;
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthenticationService, private snackBar: MatSnackBar) {
    this.addCourseForm = fb.group({
      courseId: [''],
      courseName: ['', Validators.required],
      description: ['', Validators.required],
      isPaidCourse: [false, Validators.required],
      price: [0, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addCourse() {
    const id = localStorage.getItem('instructorId');
    const courseId = uuidv4();
    this.addCourseForm.patchValue({ "courseId": courseId });
    const data = this.addCourseForm.value;
    this.authService.addCourse(data).subscribe(val => {
      if (val == true) {
        const payload = { instructorId: id, courseId }
        this.authService.setInstructorToCourse(payload).subscribe((resp) => {
          this.addCourseForm.reset();
          this.snackBar.open("Course added Successfully", "Dismiss", { duration: 2000 });
        },
          err => {
            this.snackBar.open("Unable to add course. Please try again later", "Dismiss", { duration: 3000 });
          })
      }
    }, err => {
      this.snackBar.open("Unable to add course. Please try again later", "Dismiss", { duration: 3000 });
    })
  }

}
