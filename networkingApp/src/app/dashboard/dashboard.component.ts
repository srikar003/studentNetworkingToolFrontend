import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userType: any = '';
  public recentCourses: any;
  public recentEvents: any;
  constructor(private router: Router, private authService: AuthenticationService) {
    this.userType = localStorage.getItem('userType');
    if (this.userType == null) {
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit(): void {
    this.authService.getCoursesList().subscribe((data: any) => {
      this.recentCourses = data.splice(0, 4);
      console.log(this.recentCourses);
    });

    this.authService.getEventsList().subscribe((data: any) => {
      this.recentEvents = data.splice(0, 4);
      console.log(this.recentEvents);
    });
  }

  viewCourse(data: any) {
    this.router.navigate(['/courseId', data.courseId]);
  }

  viewEvent(data: any) {
    this.router.navigate(['/eventId', data.eventId]);
  }

  navigateToCourseListPage() {
    this.router.navigate(['/courseList']);
  }
  navigateToEventsPage() {
    this.router.navigate(['/eventsList']);

  }

  navigateToAddCoursePage() {
    this.router.navigate(['/addCourse']);
  }

  navigateToAddEventsPage() {
    this.router.navigate(['/addEvent']);
  }

}
