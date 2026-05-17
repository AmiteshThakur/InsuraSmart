import { Component, NgModule } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../components/adminComponent/admin-dashboard/admin-dashboard.component';
import { AdminUnderwriterComponent } from "../../components/adminComponent/admin-underwriter/admin-underwriter.component";
import { AdminPolicyComponent } from "../../components/adminComponent/admin-policy/admin-policy.component";
import { AdminCategoryComponent } from "../../components/adminComponent/admin-category/admin-category.component";

@Component({
  selector: 'app-admin',
  imports: [NavBarComponent, CommonModule, AdminDashboardComponent, AdminUnderwriterComponent, AdminUnderwriterComponent, AdminPolicyComponent, AdminCategoryComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  isSidebarClosed = false;
  selectedMenu = 'dashboard'; // Default selected menu

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }
}
