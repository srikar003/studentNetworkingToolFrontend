import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public addCourseForm: any;
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthenticationService) {
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
    this.addCourseForm.patchValue({ "courseId": uuidv4() });
    const data = this.addCourseForm.value;
    this.authService.addCourse(data).subscribe(val => {
      this.addCourseForm.reset();
      console.log(val);
    })
  }

}
