import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerModel } from '../models/manager.model';
import { ClientModel } from '../models/client.model';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7036/api/Admin'; // Update with the actual API URL

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  //************************Employee Methods*******************************

  // Fetch all employees
  getAllEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees`, { headers: this.getAuthHeaders() });
  }

  // Fetch employee by ID
  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees/${id}`, { headers: this.getAuthHeaders() });
  }

  // Create an employee
  createEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createEmployee`, employeeData, { headers: this.getAuthHeaders() });
  }

  // Update an existing employee
  updateEmployee(employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateEmployee`, employeeData, { headers: this.getAuthHeaders() });
  }


  //***************************Users Methods***********************************


  // Fetch all users
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`, { headers: this.getAuthHeaders() });
  }



  // Update user status
  updateUserIsActive(userId: number, isActive: boolean): Observable<any> {
    const body = { isActive };
    return this.http.put<any>(`${this.apiUrl}/users/${userId}/activate`, body, { headers: this.getAuthHeaders() });
  }

  // Fetch users by role
  getUsersByRole(roleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/role/${roleId}`, { headers: this.getAuthHeaders() });
  }




  // **************************************Department Methods************************************

  // Fetch all departments
  getDepartments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departments`, { headers: this.getAuthHeaders() });
  }

  // Fetch department by ID
  getDepartmentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departments/${id}`, { headers: this.getAuthHeaders() });
  }

  // Add a new department
  addDepartment(departmentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/departments`, departmentData, { headers: this.getAuthHeaders() });
  }

  // Update an existing department
  updateDepartment(departmentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/departments`, departmentData, { headers: this.getAuthHeaders() });
  }

  //***********************************************************Manager******************** */

// Get all managers
getAllManagers(): Observable<ManagerModel[]> {
  return this.http.get<ManagerModel[]>(`${this.apiUrl}/managers`, { headers: this.getAuthHeaders() });
}

// Get a manager by ID
getManagerById(managerId: number): Observable<ManagerModel> {
  return this.http.get<ManagerModel>(`${this.apiUrl}/managers/${managerId}`, { headers: this.getAuthHeaders() });
}

createManager(manager: FormData): Observable<any> {
  const headers = this.getAuthHeaders().delete('Content-Type');  // Remove 'Content-Type' as it should be auto-set for FormData
  return this.http.post(`${this.apiUrl}/createManager`, manager, { headers });
}

// Update an existing manager
updateManager(manager: ManagerModel): Observable<any> {
  return this.http.put(`${this.apiUrl}/updateManager`, manager, { headers: this.getAuthHeaders() });
}

// Delete a manager
deleteManager(managerId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/managers/${managerId}`, { headers: this.getAuthHeaders() });
}

 // ********************************Client Methods************************************

 getAllClients(): Observable<ClientModel[]> {
  return this.http.get<ClientModel[]>(`${this.apiUrl}/clients`, { headers: this.getAuthHeaders() });
}

getClientById(clientId: number): Observable<ClientModel> {
  return this.http.get<ClientModel>(`${this.apiUrl}/clients/${clientId}`, { headers: this.getAuthHeaders() });
}

createClient(client: FormData): Observable<any> {
  const headers = this.getAuthHeaders().delete('Content-Type'); // Remove 'Content-Type' for FormData
  return this.http.post(`${this.apiUrl}/createClient`, client, { headers });
}

updateClient(client: ClientModel): Observable<any> {
  return this.http.put(`${this.apiUrl}/updateClient`, client, { headers: this.getAuthHeaders() });
}

deleteClient(clientId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/clients/${clientId}`, { headers: this.getAuthHeaders() });
}


//--------------------------admin---------------------------//

   // Fetch all admins
   getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}`, { headers: this.getAuthHeaders() });
  }

  // Fetch admins by UserId
  getAdminsByUserId(userId: number): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/admin/${userId}`, { headers: this.getAuthHeaders() });
  }

  // Fetch a specific admin by AdminId
  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${adminId}`, { headers: this.getAuthHeaders() });
  }

  // Create a new admin
  createAdmin(newAdmin: Admin): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, newAdmin, { headers: this.getAuthHeaders() });
  }

  // Update an admin by AdminId
  updateAdmin(adminId: number, updatedAdmin: Admin): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${adminId}`, updatedAdmin, { headers: this.getAuthHeaders() });
  }

  // Soft delete an admin by AdminId
  deleteAdmin(adminId: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${adminId}`, { headers: this.getAuthHeaders() });
  }
  
}
