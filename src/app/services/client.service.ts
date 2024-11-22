import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsProjectRequestsModel } from '../models/clientProjectRequests.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://localhost:7036/api/Client'; // Update with the actual API URL

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Fetch all project requests
  getAllProjectsRequests(): Observable<ClientsProjectRequestsModel[]> {
    return this.http.get<ClientsProjectRequestsModel[]>(`${this.apiUrl}/projectsRequests`, {
      headers: this.getAuthHeaders()
    });
  }

  // Fetch project request by ID
  getProjectRequestById(projectId: number): Observable<ClientsProjectRequestsModel> {
    return this.http.get<ClientsProjectRequestsModel>(`${this.apiUrl}/projectsRequests/${projectId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Create a new project request
  createProjectRequest(projectRequest: ClientsProjectRequestsModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/projectsRequests`, projectRequest, {
      headers: this.getAuthHeaders()
    });
  }

  // Update an existing project request
  updateProjectRequest(projectRequest: ClientsProjectRequestsModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/projectsRequests/${projectRequest.projectID}`, projectRequest, {
      headers: this.getAuthHeaders()
    });
  }

  // Delete a project request
  deleteProjectRequest(projectId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/projectsRequests/${projectId}`, {
      headers: this.getAuthHeaders()
    });
  }
}
