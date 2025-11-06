import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MascotaService } from '../../shared/services/mascota.service';
import { CitaService } from '../../shared/services/cita.service';

@Component({
  selector: 'app-cliente-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-dashboard.html',
  styleUrls: ['./cliente-dashboard.css']
})
export class ClienteDashboardComponent {
  mascotas: any[] = [];
  citas: any[] = [];

  constructor(
    public auth: AuthService,
    private mascotaService: MascotaService,
    private citaService: CitaService
  ) {
    this.loadData();
  }

  loadData() {
    if (this.auth.currentUser) {
      this.mascotas = this.mascotaService.getMascotasByCliente(this.auth.currentUser.username);
      this.citas = this.citaService.getCitasByCliente(this.auth.currentUser.username);
    }
  }

  logout() {
    this.auth.logout();
    location.href = '/login';
  }
}
