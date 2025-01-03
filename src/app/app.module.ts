import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './admin/home/home.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { ListEmployeeComponent } from './admin/employee/list-employee/list-employee.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { UpdateManagerComponent } from './admin/manager/update-manager/update-manager.component';
import { ListManagerComponent } from './admin/manager/list-manager/list-manager.component';
import { AddClientComponent } from './admin/client/add-client/add-client.component';
import { UpdateClientComponent } from './admin/client/update-client/update-client.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';
import { AdminProfileUpdateComponent } from './admin/admin-profile-update/admin-profile-update.component';
import { AddProjectsComponent } from './admin/projects/add-projects/add-projects.component';
import { ListProjectsComponent } from './admin/projects/list-projects/list-projects.component';
import { UpdateProjectsComponent } from './admin/projects/update-projects/update-projects.component';
import { OuterHomeComponent } from './outer/outer-home/outer-home.component';
import { OuterAboutComponent } from './outer/outer-about/outer-about.component';
import { SignupFormComponent } from './outer/signup-form/signup-form.component';
import { ServicesComponent } from './outer/services/services.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './layout/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin-layout/admin-footer/admin-footer.component';
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { EmployeeHeaderComponent } from './layout/employee-layout/employee-header/employee-header.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { ClientHeaderComponent } from './layout/client-layout/client-header/client-header.component';
import { ClientFooterComponent } from './layout/client-layout/client-footer/client-footer.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { ManagerHeaderComponent } from './layout/manager-layout/manager-header/manager-header.component';
import { ManagerFooterComponent } from './layout/manager-layout/manager-footer/manager-footer.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { FooterComponent } from './layout/outer-layout/footer/footer.component';
import { HeaderComponent } from './layout/outer-layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './outer/employee-login/employee-login.component';
import { ClientLoginComponent } from './outer/client-login/client-login.component';
import { ManagerLoginComponent } from './outer/manager-login/manager-login.component';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.service';
import { EmployeeSideBarComponent } from './layout/employee-layout/employee-side-bar/employee-side-bar.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { EmployeeattendanceComponent } from './employee/employeeattendance/employeeattendance.component';
import { EmployeeprojectsComponent } from './employee/employeeprojects/employeeprojects.component';
import { EmployeetasksComponent } from './employee/employeetasks/employeetasks.component';
import { EmployeeleaverequestsComponent } from './employee/employeeleaverequests/employeeleaverequests.component';
import { EmployeeperformanceComponent } from './employee/employeeperformance/employeeperformance.component';
import { AdminSideBarComponent } from './layout/admin-layout/admin-side-bar/admin-side-bar.component';
import { EmployeeFooterComponent } from './layout/employee-layout/employee-footer/employee-footer.component';
import { ManagerSideBarComponent } from './layout/manager-layout/manager-side-bar/manager-side-bar.component';
import { EmployeeService } from './services/employee.service';
import { AdminService } from './services/admin.service';
import { UserRequestsComponent } from './admin/user-requests/user-requests.component';
import { ListDepartmentComponent } from './admin/department/list-department/list-department.component';
import { UpdateDepartmentComponent } from './admin/department/update-department/update-department.component';
import { AddDepartmentComponent } from './admin/department/add-department/add-department.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ClientSideBarComponent } from './layout/client-layout/client-side-bar/client-side-bar.component';
import { authInterceptor } from './interceptor/auth.interceptor';
import { RequestProjectsComponent } from './client/projects/request-projects/request-projects.component';
import { RequestNewProjectsComponent } from './client/projects/request-new-projects/request-new-projects.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { UpdateRequestedProjectsComponent } from './client/projects/update-requested-projects/update-requested-projects.component';
import { ChatComponent } from './client/chat/chat/chat.component';
import { JoinRoomComponent } from './client/chat/join-room/join-room.component';
import { WelcomeComponent } from './client/chat/welcome/welcome.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { ManagerChatComponent } from './manager/chat/manager-chat/manager-chat.component';
import { ManagerJoinRoomComponent } from './manager/chat/manager-join-room/manager-join-room.component';
import { ManagerWelocomeComponent } from './manager/chat/manager-welocome/manager-welocome.component';
import { ClientProfileComponent } from './client/profile/client-profile/client-profile.component';
import { ClientProfileUpdateComponent } from './client/profile/client-profile-update/client-profile-update.component';
import { ClientSettingsComponent } from './client/settings/client-settings/client-settings.component';
import { ClientResetPasswordComponent } from './client/settings/client-reset-password/client-reset-password.component';
import { EmployeeProfileUpdateComponent } from './employee/profile/employee-profile-update/employee-profile-update.component';
import { EmployeeprofileComponent } from './employee/profile/employeeprofile/employeeprofile.component';
import { EmployeeSettingsComponent } from './employee/settings/employee-settings/employee-settings.component';
import { EmployeeResetPasswordComponent } from './employee/settings/employee-reset-password/employee-reset-password.component';
import { ManagerSettingsComponent } from './manager/settings/manager-settings/manager-settings.component';
import { ManagerResetPasswordComponent } from './manager/settings/manager-reset-password/manager-reset-password.component';
import { ManagerProfileComponent } from './manager/profile/manager-profile/manager-profile.component';
import { ManagerProfileUpdateComponent } from './manager/profile/manager-profile-update/manager-profile-update.component';
import { EmployeeChatComponent } from './employee/chat/employee-chat/employee-chat.component';
import { EmployeeWelcomeComponent } from './employee/chat/employee-welcome/employee-welcome.component';
import { EmployeeJoinRoomComponent } from './employee/chat/employee-join-room/employee-join-room.component';
import { ForgotPasswordComponent } from './outer/forgot-password/forgot-password.component';
import { AdminProfileComponent } from './admin/profile/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent,
    ClientComponent,
    HomeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    AddManagerComponent,
    UpdateManagerComponent,
    ListManagerComponent,
    AddClientComponent,
    UpdateClientComponent,
    ListClientComponent,
    AdminProfileUpdateComponent,
    AddProjectsComponent,
    ListProjectsComponent,
    UpdateProjectsComponent,
    OuterHomeComponent,
    OuterAboutComponent,
    SignupFormComponent,
    ServicesComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    EmployeeLayoutComponent,
    ClientLayoutComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ManagerLayoutComponent,
    ManagerHeaderComponent,
    ManagerFooterComponent,
    OuterLayoutComponent,
    FooterComponent,
    HeaderComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    ClientLoginComponent,
    ManagerLoginComponent,
    ManagerLoginComponent,
    EmployeeSideBarComponent,
    EmployeehomeComponent,
    EmployeeprofileComponent,
    EmployeeattendanceComponent,
    EmployeeprojectsComponent,
    EmployeetasksComponent,
    EmployeeleaverequestsComponent,
    EmployeeperformanceComponent,
    AdminSideBarComponent,
    EmployeeHeaderComponent,
    EmployeeFooterComponent,
    ManagerSideBarComponent,
    UserRequestsComponent,
    ListDepartmentComponent,
    UpdateDepartmentComponent,
    AddDepartmentComponent,
    ClientSideBarComponent,
    RequestProjectsComponent,
    RequestNewProjectsComponent,
    ClientHomeComponent,
    UpdateRequestedProjectsComponent,
    ChatComponent,
    JoinRoomComponent,
    WelcomeComponent,
    ManagerHomeComponent,
    ManagerChatComponent,
    ManagerJoinRoomComponent,
    ManagerWelocomeComponent,
    ClientProfileComponent,
    ClientProfileUpdateComponent,
    ClientSettingsComponent,
    ClientResetPasswordComponent,
    EmployeeProfileUpdateComponent,
    EmployeeSettingsComponent,
    EmployeeResetPasswordComponent,
    ManagerSettingsComponent,
    ManagerResetPasswordComponent,
    ManagerProfileComponent,
    ManagerProfileUpdateComponent,
    EmployeeChatComponent,
    EmployeeWelcomeComponent,
    EmployeeJoinRoomComponent,
    ForgotPasswordComponent,
    AdminProfileComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,          // Add FormsModule here
    HttpClientModule ,
    MatSnackBarModule,
    BrowserAnimationsModule, // Include this module for animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position of the toast messages
      preventDuplicates: true, // Prevent duplicate toasts
    }),
    NgxSpinnerModule.forRoot(),
  ],
  providers: [UserService,
    AuthenticationService,
    EmployeeService,
    AdminService,
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
