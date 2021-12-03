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

  public userType: any;
  private readonly studentRegistrationUrl = "http://localhost:8080/studentRegistration"
  private readonly instructorsRegistrationUrl = "http://localhost:8080/instructorRegistration"
  private readonly studentSignInUrl = "http://localhost:8080/studentSignIn"
  private readonly instructorSignInUrl = "http://localhost:8080/instructorSignIn"
  private readonly addCourseUrl = "http://localhost:8080/addCourse"
  private readonly addEventUrl = "http://localhost:8080/addEvent"
  private readonly addPaymentUrl = "http://localhost:8080/addPayment"
  private readonly addCardPaymentUrl = "http://localhost:8080/addCardPayment"
  private readonly addElectronicCheckPaymentUrl = "http://localhost:8080/addElectronicCheckPayment"
  private readonly addProfessorsUrl = "http://localhost:8080/addProfessors"
  private readonly addCorporateProfessionalUrl = "http://localhost:8080/addCorporateProfessional"
  private readonly addInstructorsToCourseUrl = "http://localhost:8080/addInstructorsToCourse"
  private readonly addParticipantsToEventsUrl = "http://localhost:8080/addParticipantsToEvents"
  private readonly getCoursesListUrl = "http://localhost:8080/getCourses"
  private readonly getEventsListUrl = "http://localhost:8080/getEvents"
  private readonly enrollCourseUrl = "http://localhost:8080/enrollCourse"
  private readonly getCourseInfoUrl = "http://localhost:8080/getCourseInfo"
  private readonly getEventInfoUrl = "http://localhost:8080/getEventInfo"




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

  createCardPayment(data: any) {
    return this.http.post(this.addPaymentUrl, data, this.httpOptions).pipe(map(d => d));
  }

  addElectronicCheckPayment(data: any) {
    return this.http.post(this.addElectronicCheckPaymentUrl, data, this.httpOptions).pipe(map(d => d));
  }

  addCardPayment(data: any) {
    return this.http.post(this.addCardPaymentUrl, data, this.httpOptions).pipe(map(d => d));
  }

  signIn(data: any, userType: string) {
    if (userType == 'student') {
      return this.http.post(this.studentSignInUrl, data, this.httpOptions).pipe(map(d => d));
    }
    return this.http.post(this.instructorSignInUrl, data, this.httpOptions).pipe(map(d => d));
  }

  setInstructorToCourse(data: any) {
    return this.http.post(this.addInstructorsToCourseUrl, data, this.httpOptions).pipe(map(d => d));
  }

  addParticipantsToEvents(data: any) {
    return this.http.post(this.addParticipantsToEventsUrl, data, this.httpOptions).pipe(map(d => d));
  }

  getCoursesList() {
    return this.http.get(this.getCoursesListUrl).pipe(map(d => d));
  }

  getEventsList() {
    return this.http.get(this.getEventsListUrl).pipe(map(d => d));
  }

  enrollCourse(data: any) {
    return this.http.post(this.enrollCourseUrl, data, this.httpOptions).pipe(map(d => d));
  }

  getCourseInfo(data: any) {
    return this.http.post(this.getCourseInfoUrl, data, this.httpOptions).pipe(map(d => d));
  }

  getEventInfo(data: any) {
    return this.http.post(this.getEventInfoUrl, data, this.httpOptions).pipe(map(d => d));
  }

}
