import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: any[] = [];  // Initialize employees array
  showDetails = false;     // Control the display of employee details
  selectedEmployee: any;   // Store the currently selected employee

  constructor(private adminService: AdminService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.fetchEmployees();   // Fetch employees on component initialization
  }

  // Fetch employees from the API
  fetchEmployees() {
    this.adminService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data; // Assign fetched data to the employees array
      },
      (error) => {
        console.error('Error fetching employees', error); // Handle error
      }
    );
  }

  // Show details of the selected employee
  showMore(employee: any) {
    this.selectedEmployee = employee;
    this.showDetails = true; // Display the details view
  }

  // Navigate to the Add Employee component
  goToAddEmployee(): void {
    this.router.navigate(['admin/employee/add-employee']); // Programmatic navigation
  }

  goToUpdateEmployee(employeeId: number) {
    this.router.navigate(['admin/employee/update-employee', employeeId]);
  }
}
