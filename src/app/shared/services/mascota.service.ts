import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota.model';
import { Cita } from '../models/cita.model';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascotas: Mascota[] = [
    { id: 1, nombre: 'Firulais', especie: 'Perro', raza: 'Labrador', edad: 3, peso: 25, propietario: 'Carlos Pérez', historial: [], recetas: [] },
    { id: 2, nombre: 'Mishi', especie: 'Gato', raza: 'Siames', edad: 2, peso: 6, propietario: 'Lucía Torres', historial: [], recetas: [] },
  ];

  constructor() { }

  // ✅ Obtener todas las mascotas
  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  // ✅ Buscar mascota por ID
  getMascotaById(id: number): Mascota | undefined {
    return this.mascotas.find(m => m.id === id);
  }

  // ✅ Registrar nueva mascota
  addMascota(mascota: Mascota): void {
    mascota.id = this.mascotas.length + 1;
    mascota.historial = [];
    mascota.recetas = [];
    this.mascotas.push(mascota);
  }

  // ✅ Actualizar mascota
  updateMascota(id: number, mascotaActualizada: Mascota): void {
    const index = this.mascotas.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mascotas[index] = mascotaActualizada;
    }
  }

  // ✅ Eliminar mascota
  deleteMascota(id: number): void {
    this.mascotas = this.mascotas.filter(m => m.id !== id);
  }

  // ✅ Obtener mascotas por propietario
  getMascotasByCliente(propietario: string): Mascota[] {
    return this.mascotas.filter(m => m.propietario === propietario);
  }

  // ✅ Agregar cita al historial
  agregarCitaAMascota(idMascota: number, cita: Cita): void {
    const mascota = this.getMascotaById(idMascota);
    if (mascota) {
      if (!mascota.historial) mascota.historial = [];
      mascota.historial.push(cita);
    }
  }

  // ------------------------------------------------
  // ✅ ✅ Funciones de recetas médicas
  // ------------------------------------------------

  // Añadir receta a la mascota
  addReceta(mascotaId: number, receta: Receta): void {
    const mascota = this.getMascotaById(mascotaId);
    if (mascota) {
      receta.id = mascota.recetas?.length ? mascota.recetas.length + 1 : 1;
      mascota.recetas = mascota.recetas || [];
      mascota.recetas.push(receta);
    }
  }

  // Obtener las recetas de una mascota
  getRecetas(mascotaId: number): Receta[] {
    const mascota = this.getMascotaById(mascotaId);
    return mascota?.recetas ?? [];
  }

  // Editar receta
  updateReceta(mascotaId: number, recetaId: number, recetaActualizada: Receta): void {
    const mascota = this.getMascotaById(mascotaId);
    if (!mascota?.recetas) return;

    const index = mascota.recetas.findIndex(r => r.id === recetaId);
    if (index !== -1) mascota.recetas[index] = recetaActualizada;
  }

  // Eliminar receta
  deleteReceta(mascotaId: number, recetaId: number): void {
    const mascota = this.getMascotaById(mascotaId);
    if (!mascota?.recetas) return;

    mascota.recetas = mascota.recetas.filter(r => r.id !== recetaId);
  }
}
