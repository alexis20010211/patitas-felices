import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';
import { MascotaService } from './mascota.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private citas: Cita[] = [
    { id: 1, fecha: '2025-11-10', hora: '10:00', motivo: 'Vacunación', veterinario: 'Dra. López', mascotaId: 1 },
    { id: 2, fecha: '2025-11-15', hora: '14:00', motivo: 'Chequeo general', veterinario: 'Dr. Ramos', mascotaId: 2 },
  ];

  constructor(private mascotaService: MascotaService) { }

  getCitas(): Cita[] {
    return this.citas;
  }

  getCitasByMascota(idMascota: number): Cita[] {
    return this.citas.filter(c => c.mascotaId === idMascota);
  }

  addCita(cita: Cita): void {
    cita.id = this.citas.length + 1;
    this.citas.push(cita);
  }

  deleteCita(id: number): void {
    this.citas = this.citas.filter(c => c.id !== id);
  }

  getCitaById(id: number): Cita | undefined {
    return this.citas.find(c => c.id === id);
  }

  getCitasByCliente(propietario: string): Cita[] {
    const mascotasCliente = this.mascotaService.getMascotasByCliente(propietario);
    const idsMascotas = mascotasCliente.map(m => m.id);
    return this.citas.filter(c => idsMascotas.includes(c.mascotaId));
  }

  // 🔹 Nuevo método para veterinario
  getCitasByVeterinario(nombreVeterinario: string): Cita[] {
    return this.citas.filter(c => c.veterinario === nombreVeterinario);
  }
}
