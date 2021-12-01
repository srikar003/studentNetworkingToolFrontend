import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProfessorRegistrationComponent } from './professor-registration/professor-registration.component';
import { EventComponent } from './event/event.component';
import { SigninComponent } from './signin/signin.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SignupComponent } from './signup/signup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    DashboardComponent,
    CoursesComponent,
    ProfessorRegistrationComponent,
    EventComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
