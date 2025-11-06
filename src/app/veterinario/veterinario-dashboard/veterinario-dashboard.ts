import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CitaService } from '../../shared/services/cita.service';

@Component({
  selector: 'app-veterinario-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './veterinario-dashboard.html',
  styleUrls: ['./veterinario-dashboard.css']
})
export class VeterinarioDashboardComponent {
  citas: any[] = [];

  constructor(public auth: AuthService, private citaService: CitaService) {
    this.loadCitas();
  }

  loadCitas() {
    if (this.auth.currentUser) {
      this.citas = this.citaService.getCitasByVeterinario(this.auth.currentUser.username);
    }
  }

  logout() {
    this.auth.logout();
    location.href = '/login';
  }
}
