import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userType: any = '';
  constructor(private router: Router) {
    this.userType = localStorage.getItem('userType');
    if(this.userType == null){
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit(): void {
  }

  navigateToCourseListPage() {

  }
  navigateToEventsPage() {

  }

  navigateToAddCoursePage() {
    this.router.navigate(['/addCourse']);
  }

  navigateToAddEventsPage() {
    this.router.navigate(['/addEvent']);
  }

}
