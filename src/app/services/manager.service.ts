import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerModel } from '../models/manager.model';

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

   //------------------------------ Reset Password ------------------------------//
 resetPassword(userId: number, username: string, currentPassword: string, newPassword: string): Observable<any> {
  const headers = this.getAuthHeaders();
  const params = new HttpParams()
    .set('userId', userId.toString())
    .set('username', username)
    .set('currentPassword', currentPassword)
    .set('newPassword', newPassword);

  // Specify responseType: 'text' to handle plain text responses
  return this.http.post(`${this.apiUrl}/reset-password`, null, {
    headers,
    params,
    responseType: 'text' as 'json' // Casting the type to avoid type issues
  });
  }

   //-------------------manager---------------------//
   // Get a manager by ID
    getManagerById(managerId: number): Observable<ManagerModel> {
      return this.http.get<ManagerModel>(`${this.apiUrl}/managers/${managerId}`, { headers: this.getAuthHeaders() });
    }

    // Update an existing manager
    updateManager(manager: ManagerModel): Observable<any> {
      return this.http.put(`${this.apiUrl}/updateManager`, manager, { headers: this.getAuthHeaders() });
    }

}
