import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7036/api/Employee'; // Your API base URL

  constructor(private http: HttpClient) {}

  getEmployeeByUserId(userId: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${userId}`);
  }

  updateEmployee(employee: EmployeeModel): Observable<void> {
    return this.http.put<void>(this.apiUrl, employee);
  }
}
