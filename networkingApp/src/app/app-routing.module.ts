import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventComponent } from './event/event.component';
import { ProfessorRegistrationComponent } from './professor-registration/professor-registration.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'studentRegistration', component: StudentRegistrationComponent },
  { path: 'professorRegistration', component: ProfessorRegistrationComponent },
  { path: 'addCourse', component: CoursesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addEvent', component: EventComponent },
  { path: 'courseList', component: CourseListComponent },
  { path: 'eventList', component: EventListComponent },
  { path: 'courseId', component: CoursePageComponent },
  { path: 'eventId', component: EventPageComponent },
  { path: '**', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
