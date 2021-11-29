import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  private readonly studentRegistrationUrl = "http://localhost:8080/studentRegistration"
  private readonly addCourseUrl = "http://localhost:8080/addCourse"
  private readonly addEventUrl = "http://localhost:8080/addEvent"
  private readonly studentSignInUrl = "http://localhost:8080/studentSignIn"
  private readonly instructorSignInUrl = "http://localhost:8080/instructorSignIn"
  private readonly instructorsRegistrationUrl = "http://localhost:8080/instructorRegistration"
  private readonly addCorporateProfessionalUrl = "http://localhost:8080/addCorporateProfessional"
  private readonly addProfessorsUrl = "http://localhost:8080/addProfessors"

  constructor(private readonly http: HttpClient) { }

  postStudentData(data: any) {
    return this.http.post(this.studentRegistrationUrl, data, this.httpOptions).pipe(map(d => d));
  }

  addCourse(data: any) {
    return this.http.post(this.addCourseUrl, data, this.httpOptions).pipe(map(d => d));
  }

  postInstructorData(data: any) {
    return this.http.post(this.instructorsRegistrationUrl, data, this.httpOptions).pipe(map(d => d));
  }

  postCorpProfessionalData(data: any) {
    return this.http.post(this.addCorporateProfessionalUrl, data, this.httpOptions).pipe(map(d => d));
  }

  postProfessorData(data: any) {
    return this.http.post(this.addProfessorsUrl, data, this.httpOptions).pipe(map(d => d));
  }

  addEvent(data: any) {
    return this.http.post(this.addEventUrl, data, this.httpOptions).pipe(map(d => d));
  }

  signIn(data: any, userType: string) {
    if (userType == 'student') {
      return this.http.post(this.studentSignInUrl, data, this.httpOptions).pipe(map(d => d));
    }
    return this.http.post(this.instructorSignInUrl, data, this.httpOptions).pipe(map(d => d));
  }
}
