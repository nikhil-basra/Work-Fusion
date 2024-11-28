import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import jwt_decode from 'jwt-decode'; // Import jwt-decode

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
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
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

          // Decode the JWT token
          const decodedToken: any = jwt_decode(token);

          // Store the token and its decoded values in localStorage
          localStorage.setItem('authToken', token);
          localStorage.setItem('UserId', decodedToken.UserId);
          localStorage.setItem('UserName', decodedToken.unique_name);
          localStorage.setItem('Role', decodedToken.role);
          localStorage.setItem('EntityId', decodedToken.EntityId);
          localStorage.setItem('FullName', decodedToken.FullName);

          // Navigate to the client dashboard (adjust path if necessary)
          this.router.navigate(['/client']);

          // Display success message
          this.toastr.success('Client login successful!', 'Success');
          console.log('Decoded token values stored in localStorage:', decodedToken);
        },
        error: (error) => {
          this.toastr.error('Invalid client credentials!', 'Error');
          console.error('Client login error:', error);
        }
      });
    }
  }
}
