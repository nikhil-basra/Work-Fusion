import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('authToken'); // Clear the auth token from local storage
    this.router.navigate(['/outer-home']); // Redirect to the login page
  }
}
