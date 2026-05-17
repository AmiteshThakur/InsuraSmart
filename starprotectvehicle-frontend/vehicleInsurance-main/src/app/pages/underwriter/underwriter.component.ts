import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { UnderwriterDashboardComponent } from "../../components/underwriterComponent/underwriter-dashboard/underwriter-dashboard.component";
import { UnderwriterVehicleInsuranceComponent } from "../../components/underwriterComponent/underwriter-vehicle-insurance/underwriter-vehicle-insurance.component";
import { UnderwriterViewAllComponent } from '../../components/underwriterComponent/underwriter-view-all/underwriter-view-all.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-underwriter',
  imports: [NavBarComponent, CommonModule, UnderwriterDashboardComponent, UnderwriterVehicleInsuranceComponent, UnderwriterViewAllComponent,RouterOutlet],
  templateUrl: './underwriter.component.html',
  styleUrl: './underwriter.component.css'
})
export class UnderwriterComponent {
  isSidebarClosed = false;
  selectedMenu = 'dashboard'; // Default selected menu

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }
}
