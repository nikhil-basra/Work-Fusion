import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // Import Router if navigation is needed
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  managerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router // Inject Router for navigation
  ) {
    this.managerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false] // Optional remember me functionality
    });
  }

  onSubmit() {
    this.managerForm.markAllAsTouched(); // Mark all fields as touched

    if (this.managerForm.valid) {
      const roleId = 2; // Assuming roleId for Manager is 2
      const { username, password } = this.managerForm.value;

      this.authService.login(roleId, username, password).subscribe({
        next: (response) => {
          const token = response.token; // Assuming response contains a token

          // Store the token in localStorage
          localStorage.setItem('authToken', token);

          // Navigate to the manager dashboard (adjust path if necessary)
          this.router.navigate(['/manager']);

          // Display success message
          this.toastr.success('Manager login successful!', 'Success');
          console.log('Manager token saved to localStorage:', token);
        },
        error: (error) => {
          this.toastr.error('Invalid manager credentials!', 'Error');
          console.error('Manager login error:', error);
        }
      });
    }
  }
}
