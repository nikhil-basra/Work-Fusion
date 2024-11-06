import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {
  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Fetch all users
  loadUsers(): void {
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  // Toggle user status
  toggleUserStatus(userId: number, isActive: boolean): void {
    this.adminService.updateUserIsActive(userId, isActive).subscribe({
      next: () => {
        const user = this.users.find(u => u.userId === userId);
        if (user) {
          user.isActive = isActive;
        }
      },
      error: (error) => {
        console.error('Error updating user status:', error.message, error.error);
      }
    });
  }
  
}
