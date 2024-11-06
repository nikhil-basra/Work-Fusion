import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7036/api/Admin'; // Update with actual API URL

  constructor(private http: HttpClient) { }

  // Fetch all employees
  getAllEmployees(): Observable<any> {
    const token = localStorage.getItem('authToken'); // Get the token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Set the Authorization header
    });
    
    return this.http.get<any>(`${this.apiUrl}/employees`, { headers });
  }

  // Fetch employee by ID
  getEmployeeById(id: number): Observable<any> {
    const token = localStorage.getItem('authToken'); // Get the token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Set the Authorization header
    });
    
    return this.http.get<any>(`${this.apiUrl}/employees/${id}`, { headers });
  }

  // Fetch all users
  getAllUsers(): Observable<any> {
    const token = localStorage.getItem('authToken'); // Get the token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Set the Authorization header
    });

    return this.http.get<any>(`${this.apiUrl}/users`, { headers });
  }

  //update user status
  updateUserIsActive(userId: number, isActive: boolean): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Ensure JSON content type is specified
    });
    
    // Send as an object with `isActive` property
    const body = { isActive };
  
    return this.http.put<any>(`${this.apiUrl}/users/${userId}/activate`, body, { headers });
  }
  
  
}
