import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../shared/services/cita.service';
import { Cita } from '../../shared/models/cita.model';
import { MascotaService } from '../../shared/services/mascota.service';
import { Mascota } from '../../shared/models/mascota.model';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './citas.html',
  styleUrls: ['./citas.css']
})
export class CitasComponent implements OnInit {
  citas: Cita[] = [];
  mascotas: Mascota[] = [];

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.citas = this.citaService.getCitas();
    this.mascotas = this.mascotaService.getMascotas();
  }

  eliminarCita(id: number) {
    this.citaService.deleteCita(id);
    this.citas = this.citaService.getCitas();
  }

getNombreMascota(id: number): string {
    const mascota = this.mascotas.find(m => m.id === id);
    return mascota ? mascota.nombre : 'Desconocida';
  }
}