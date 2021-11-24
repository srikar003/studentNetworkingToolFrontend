import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly studentRegistrationUrl = "http://localhost:8080/studentRegistration"
  constructor(private readonly http: HttpClient) {

  }

  postStudentData(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.post(this.studentRegistrationUrl, data, httpOptions).pipe(map(d => d));
  }
}
