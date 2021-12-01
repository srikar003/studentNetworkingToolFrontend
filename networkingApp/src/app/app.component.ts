import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'networkingApp';
  constructor(public readonly router: Router) { }

  signout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
