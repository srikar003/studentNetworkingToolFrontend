import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public userType: string = '';
  public signInForm: any;
  constructor(private fb: FormBuilder, private readonly authService: AuthenticationService,
    private router: Router) {
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
    this.authService.signIn(this.signInForm.value, this.userType).subscribe(data => {
      console.log(data);

      localStorage.setItem('userType', this.userType);
      this.router.navigate(['/dashboard']);
    })
  }


  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
