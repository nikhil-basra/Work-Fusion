import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7036/api/Employee'; // Your API base URL

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getEmployeeByUserId(userId: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${userId}`);
  }

  updateEmployee(employee: EmployeeModel): Observable<void> {
    return this.http.put<void>(this.apiUrl, employee);
  }

    // Fetch image by userId and roleId
    getImageByUserIdAndRoleId(userId: number, roleId: number): Observable<any> {
      return this.http.get<any>(
        `${this.apiUrl}/employeeImage/${userId}/${roleId}`,
        { headers: this.getAuthHeaders() }
      );
    }
  
}
