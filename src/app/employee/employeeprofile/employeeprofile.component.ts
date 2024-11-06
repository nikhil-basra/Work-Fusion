import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {
  employee: EmployeeModel | null = null;
  editMode: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployeeData();
  }

  fetchEmployeeData(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId = decodedToken.UserId;

      this.employeeService.getEmployeeByUserId(userId).subscribe({
        next: (data) => this.employee = data,
        error: (error) => console.error('Error fetching employee data', error)
      });
    }
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.employee!.employeeImage = (reader.result as string).split(',')[1]; // Base64 encoded image
      };
      reader.readAsDataURL(file);
    }
  }

  updateEmployee(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: () => {
          this.editMode = false;
          alert('Employee updated successfully!');
        },
        error: (error) => console.error('Error updating employee', error)
      });
    }
  }
}
