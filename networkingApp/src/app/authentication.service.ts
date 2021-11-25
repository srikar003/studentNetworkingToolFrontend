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
  constructor(private readonly http: HttpClient) {

  }

  postStudentData(data: any) {

    return this.http.post(this.studentRegistrationUrl, data, this.httpOptions).pipe(map(d => d));
  }

  addCourse(data: any) {
    return this.http.post(this.addCourseUrl, data, this.httpOptions).pipe(map(d => d));
  }
}
