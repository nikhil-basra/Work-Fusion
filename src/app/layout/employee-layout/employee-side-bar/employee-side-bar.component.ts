import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-employee-side-bar',
  templateUrl: './employee-side-bar.component.html',
  styleUrls: ['./employee-side-bar.component.css']
})
export class EmployeeSideBarComponent implements OnInit {
  employeeName: string = '';

  ngOnInit(): void {
    this.setEmployeeName();
  }

  private setEmployeeName(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      
const decodedToken: any = jwt_decode(token as string); // Decode the JWT
      this.employeeName = decodedToken.unique_name; // Get username from the token
    }
  }
}
