import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseList: any;
  public userType: any;
  constructor(private authService: AuthenticationService, private router: Router) {
    this.userType = localStorage.getItem('userType');
    this.authService.getCoursesList().subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit(): void { }

  enrollCourse(data: any) {
    const payload = { studentId: localStorage.getItem('studentId'), courseId: data.courseId };
    this.authService.enrollCourse(payload).subscribe(resp => {
      if (resp == true) {
        //snackbar
      }
    }, err => {
      // err snackbar msg
    })
  }

  addCourse() {
    this.router.navigate(['/addCourse']);
  }

}
