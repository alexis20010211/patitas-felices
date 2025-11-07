// admin-citas.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CitaService } from '../../shared/services/cita.service';
import { MascotaService } from '../../shared/services/mascota.service';
import { Cita } from '../../shared/models/cita.model';
import { Mascota } from '../../shared/models/mascota.model';

@Component({
  selector: 'app-admin-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-citas.html',
  styleUrls: ['./admin-citas.css']
})
export class AdminCitasComponent implements OnInit {

  citas: Cita[] = [];
  mascotas: Mascota[] = [];

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.citas = this.citaService.getCitas();
    this.mascotas = this.mascotaService.getMascotas();
  }

  // Obtener nombre de mascota a partir del id
  getNombreMascota(idMascota: number): string {
    const mascota = this.mascotas.find(m => m.id === idMascota);
    return mascota ? mascota.nombre : 'Desconocida';
  }

  // Eliminar cita
  eliminarCita(id: number): void {
    if (confirm('¿Deseas eliminar esta cita?')) {
      this.citaService.deleteCita(id);
      this.citas = this.citaService.getCitas(); // actualizar lista
    }
  }

  // Editar cita
  editarCita(cita: Cita): void {
    this.router.navigate([`/admin/citas/editar/${cita.id}`]);
  }

  // Crear nueva cita
  agregarCita(): void {
    this.router.navigate(['/admin/citas/nueva']);
  }
}
