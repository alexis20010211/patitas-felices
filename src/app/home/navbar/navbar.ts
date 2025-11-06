import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  showMenu = false;
  showNosotros = false;
  showServicios = false;
  showClinica = false;

  constructor(public auth: AuthService, private router: Router) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleDropdown(dropdown: string) {
    switch (dropdown) {
      case 'nosotros':
        this.showNosotros = !this.showNosotros;
        break;
      case 'servicios':
        this.showServicios = !this.showServicios;
        break;
      case 'clinica':
        this.showClinica = !this.showClinica;
        break;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']); // Redirige al login
  }
}
