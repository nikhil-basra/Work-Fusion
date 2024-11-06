import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']  // Use 'styleUrls' instead of 'styleUrl'
})
export class ManagerLoginComponent {
  managerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.managerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.managerForm.valid) {
      // Handle the login logic here
      console.log(this.managerForm.value);
    } else {
      this.managerForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }
}
