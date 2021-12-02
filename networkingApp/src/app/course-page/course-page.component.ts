import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  public courseId: any;
  public queries: any;
  public course: any = {
    courseName: ''
  };
  public userType: any;
  public isStudentRegistered: boolean = false;
  public instructorName: any;
  constructor(private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {
    this.userType = localStorage.getItem('userType');
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.instructorName = this.route.snapshot.paramMap.get('instructorName');
    const payload = { studentId: localStorage.getItem("studentId"), courseId: this.courseId };
    this.authService.getCourseInfo(payload).subscribe((resp: any) => {
      this.course = resp.course;
      this.isStudentRegistered = resp.isStudentRegistered;
    })
  }


  ngOnInit(): void {
    this.queries = [
      {
        "question": "What is 1+1 ??",
        "answer": "It is 2"
      }
    ] as any
  }

  enrollCourse(data: any) {
    if (this.course.paidCourse) {
      this.router.navigate(['/payment']);
    }
    else {
      const payload = { studentId: localStorage.getItem('studentId'), courseId: data.courseId };
      this.authService.enrollCourse(payload).subscribe(resp => {
        if (resp == true) {
          this.isStudentRegistered = true;
          //snackbar
        }
      }, err => {
        // err snackbar msg
      })
    }
  }
}
