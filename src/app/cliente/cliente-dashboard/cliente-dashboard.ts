import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaService } from '../../shared/services/mascota.service';
import { CitaService } from '../../shared/services/cita.service';
import { Mascota } from '../../shared/models/mascota.model';
import { Cita } from '../../shared/models/cita.model';

@Component({
  selector: 'app-cliente-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-dashboard.html',
  styleUrls: ['./cliente-dashboard.css']
})
export class ClienteDashboardComponent implements OnInit {
  mascotas: Mascota[] = [];
  citas: Cita[] = [];

  constructor(
    private mascotaService: MascotaService,
    private citaService: CitaService
  ) {}

  ngOnInit(): void {
    this.mascotas = this.mascotaService.getMascotas();
    this.citas = this.citaService.getCitas();
  }

  getCitasCount(idMascota: number): number {
    return this.citas.filter(c => c.mascotaId === idMascota).length;
  }
}
