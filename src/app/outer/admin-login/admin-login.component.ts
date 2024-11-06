import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // Import Router if navigation is needed
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router // Inject Router for navigation
  ) {
    this.adminForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false] // Optional remember me functionality
    });
  }

  onSubmit() {
    this.adminForm.markAllAsTouched(); // Mark all fields as touched

    if (this.adminForm.valid) {
      const roleId = 1; // Assuming roleId for Admin is 1
      const { username, password } = this.adminForm.value;

      this.authService.login(roleId, username, password).subscribe({
        next: (response) => {
          const token = response.token; // Assuming response contains a token

          // Store the token in localStorage
          localStorage.setItem('authToken', token);

          // Navigate to the admin dashboard (adjust path if necessary)
          this.router.navigate(['/admin']);

          // Display success message
          this.toastr.success('Admin login successful!', 'Success');
          console.log('Admin token saved to localStorage:', token);
        },
        error: (error) => {
          this.toastr.error('Invalid admin credentials!', 'Error');
          console.error('Admin login error:', error);
        }
      });
    }
  }
}
