import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public userType: string = 'student';
  public signInForm: any;
  constructor(private fb: FormBuilder, private readonly authService: AuthenticationService,
    private router: Router, private snackBar: MatSnackBar) {
    this.signInForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('userType') != null) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.authService.signIn(this.signInForm.value, this.userType).subscribe((data: any) => {
      localStorage.setItem('userType', this.userType);
      if (this.userType == 'instructor') {
        localStorage.setItem('instructorId', data.id);
      } else {
        localStorage.setItem('studentId', data.id);
      }
      this.router.navigate(['/dashboard']);
      this.snackBar.open("Login Successful", "Dismiss", { duration: 2000 });
    },
      err => {
        this.snackBar.open("UserName or Password incorrect. Please try again", "Dismiss", { duration: 3000 });
      })
  }


  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
