import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiUrl = 'https://localhost:7036/api/Manager'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Fetch image by userId and roleId
  getImageByUserIdAndRoleId(userId: number, roleId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/managerImage/${userId}/${roleId}`,
      { headers: this.getAuthHeaders() }
    );
  }
}
