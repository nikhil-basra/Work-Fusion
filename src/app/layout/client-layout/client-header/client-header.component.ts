import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrl: './client-header.component.css'
})
export class ClientHeaderComponent {
  constructor(private router: Router) {}
  logout(): void {
    localStorage.removeItem('authToken'); // Clear the auth token from local storage
    this.router.navigate(['/outer-home']); // Redirect to the login page
  }
}
