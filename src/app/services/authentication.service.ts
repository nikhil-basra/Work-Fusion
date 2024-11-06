import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../models/user-login.model'; // Make sure this model is created

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:7036/api/UserLogin/authenticate'; // Your API URL

  constructor(private http: HttpClient) {}

  login(roleId: number, username: string, password: string): Observable<any> {
    const loginData: UserLoginModel = {
      RoleId: roleId,
      Username: username,
      Password: password
    };

    return this.http.post(this.apiUrl, loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
