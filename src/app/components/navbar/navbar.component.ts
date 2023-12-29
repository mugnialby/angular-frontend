import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
