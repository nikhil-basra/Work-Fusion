import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Outer Components
import { OuterHomeComponent } from './outer/outer-home/outer-home.component';
import { OuterAboutComponent } from './outer/outer-about/outer-about.component';
import { ServicesComponent } from './outer/services/services.component';
import { OuterContactComponent } from './outer/outer-contact/outer-contact.component';
import { SignupFormComponent } from './outer/signup-form/signup-form.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './outer/employee-login/employee-login.component';
import { ClientLoginComponent } from './outer/client-login/client-login.component';
import { ManagerLoginComponent } from './outer/manager-login/manager-login.component';

// Import Employee Components
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { EmployeechatComponent } from './employee/employeechat/employeechat.component';
import { EmployeeprofileComponent } from './employee/employeeprofile/employeeprofile.component';
import { EmployeeattendanceComponent } from './employee/employeeattendance/employeeattendance.component';
import { EmployeeprojectsComponent } from './employee/employeeprojects/employeeprojects.component';
import { EmployeetasksComponent } from './employee/employeetasks/employeetasks.component';
import { EmployeeleaverequestsComponent } from './employee/employeeleaverequests/employeeleaverequests.component';
import { EmployeeperformanceComponent } from './employee/employeeperformance/employeeperformance.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './admin/home/home.component';
import { ListManagerComponent } from './admin/manager/list-manager/list-manager.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { UpdateManagerComponent } from './admin/manager/update-manager/update-manager.component';
import { ListEmployeeComponent } from './admin/employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { AddClientComponent } from './admin/client/add-client/add-client.component';
import { UpdateClientComponent } from './admin/client/update-client/update-client.component';
import { UserRequestsComponent } from './admin/user-requests/user-requests.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';
import { ListDepartmentComponent } from './admin/department/list-department/list-department.component';
import { AddDepartmentComponent } from './admin/department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './admin/department/update-department/update-department.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { RequestProjectsComponent } from './client/projects/request-projects/request-projects.component';
import { RequestNewProjectsComponent } from './client/projects/request-new-projects/request-new-projects.component';
import { ListProjectsComponent } from './client/projects/list-projects/list-projects.component';
import { UpdateRequestedProjectsComponent } from './client/projects/update-requested-projects/update-requested-projects.component';

const routes: Routes = [
  // ****************************Outer Page**************************
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: 'outer-home', component: OuterHomeComponent },      // Home Page
      { path: 'outer-contact', component: OuterContactComponent }, // Contact Us
      { path: 'outer-about', component: OuterAboutComponent },     // About Us
      { path: 'services', component: ServicesComponent },          // Our Services
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'manager-login', component: ManagerLoginComponent },
      { path: 'employee-login', component: EmployeeLoginComponent },
      { path: 'client-login', component: ClientLoginComponent },
      { path: 'signup-form', component: SignupFormComponent },     // Signup
      { path: '', redirectTo: 'outer-home', pathMatch: 'full' },   // Default redirect to Home
    ]
  },

  //******************************Employee Page*************************
  {
    path: 'employee',
    component: EmployeeLayoutComponent,
    children: [
      { path: 'employeehome', component: EmployeehomeComponent },
      { path: 'employeechat', component: EmployeechatComponent },
      { path: 'employeeprofile', component: EmployeeprofileComponent },
      { path: 'employeeattendance', component: EmployeeattendanceComponent },
      { path: 'employeeprojects', component: EmployeeprojectsComponent },
      { path: 'employeetasks', component: EmployeetasksComponent },
      { path: 'employeeleave-requests', component: EmployeeleaverequestsComponent }, // Consistent naming
      { path: 'employeeperformance', component: EmployeeperformanceComponent },
      { path: '', redirectTo: 'employeehome', pathMatch: 'full' } // Default route for the employee layout
    ]
  },

  //***************************manager*************************************** 
  {
    path: 'manager',
    component: ManagerLayoutComponent,
    children: [
     
    ]
  },

  //*******************************Admin*************************************** */
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'manager/list-manager', component: ListManagerComponent },
      { path: 'manager/add-manager', component: AddManagerComponent },
      { path: 'manager/update-manager/:id', component: UpdateManagerComponent },
      { path: 'employee/list-employee', component: ListEmployeeComponent },
      { path: 'employee/add-employee', component: AddEmployeeComponent },
      { path: 'employee/update-employee/:id', component: UpdateEmployeeComponent},
      { path: 'client/list-client', component: ListClientComponent },
      { path: 'client/add-client', component: AddClientComponent },
      { path: 'client/update-client/:id', component: UpdateClientComponent},
      { path: 'department/list-department', component: ListDepartmentComponent},
      { path: 'department/add-department', component: AddDepartmentComponent},
      { path: 'department/update-department', component: UpdateDepartmentComponent},
      { path: 'user-requests', component: UserRequestsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' } 
    ]
  },


  //********************************client***************** */
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: 'home', component: ClientHomeComponent },
      { path: 'request-projects', component: RequestProjectsComponent },
      { path: 'request-new-projects', component: RequestNewProjectsComponent },
      { path: 'list-projects', component: ListProjectsComponent },
      { path: 'update-requested-projects/:id', component: UpdateRequestedProjectsComponent },
      
     
      { path: '', redirectTo: 'home', pathMatch: 'full' } 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
