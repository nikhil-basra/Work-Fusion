import { Component } from '@angular/core';

@Component({
  selector: 'app-client-side-bar',
  templateUrl: './client-side-bar.component.html',
  styleUrls: ['./client-side-bar.component.css']
})
export class ClientSideBarComponent {
  showProjectsSubmenu = false; // Track submenu visibility

  toggleProjectsSubmenu() {
    this.showProjectsSubmenu = !this.showProjectsSubmenu; // Toggle submenu
  }

  closeProjectsSubmenu() {
    this.showProjectsSubmenu = false; // Close submenu
  }

  

}
