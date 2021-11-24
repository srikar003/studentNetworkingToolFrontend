import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  addUser(data?: any){
    
    data = {
      userName: "srikar3",
      password: "abcdef",
      firstName: "srikar",
      lastName: "vuppala",
      email: "srikarvuppala003@gmail.com",
      dob: new Date("08/20/1997"),
      college: "university of Houston clear lake",
      dept: "computer science and engineering",
      contacts: ["0000000000", "0000000000", "0000000000"]
    }
    this.authService.postStudentData(data).subscribe(resp => {
      console.log(resp);
    });
  }

}
