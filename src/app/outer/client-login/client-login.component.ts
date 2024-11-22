import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // Import Router for navigation
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent {
  clientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router // Inject Router for navigation
  ) {
    this.clientForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false] // Optional remember me functionality
    });
  }

  onSubmit() {
    this.clientForm.markAllAsTouched(); // Mark all fields as touched

    if (this.clientForm.valid) {
      const roleId = 4; // Assuming roleId for Client is 4
      const { username, password } = this.clientForm.value;

      this.authService.login(roleId, username, password).subscribe({
        next: (response) => {
          const token = response.token; // Assuming response contains a token

          // Store the token in localStorage
          localStorage.setItem('authToken', token);

          // Navigate to the client dashboard (adjust path if necessary)
          this.router.navigate(['/client']);

          // Display success message
          this.toastr.success('Client login successful!', 'Success');
          console.log('Client token saved to localStorage:', token);
        },
        error: (error) => {
          this.toastr.error('Invalid client credentials!', 'Error');
          console.error('Client login error:', error);
        }
      });
    }
  }
}
