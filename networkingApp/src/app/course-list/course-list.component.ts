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

  viewCourse(data: any) {
    this.router.navigate(['/courseId', { courseId: data.courseId, instructorName: data.fullName }]);
  }

  addCourse() {
    this.router.navigate(['/addCourse']);
  }

}
