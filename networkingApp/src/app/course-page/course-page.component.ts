import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  public courseId: any;
  constructor(private authService: AuthenticationService, private route: ActivatedRoute) {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
  }


  ngOnInit(): void {
  }

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
}
