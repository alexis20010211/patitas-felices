import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  // 🧠 Arreglo temporal de mascotas (simula una base de datos)
  private mascotas: Mascota[] = [
    { id: 1, nombre: 'Firulais', especie: 'Perro', raza: 'Labrador', edad: 3, peso: 25, propietario: 'Carlos Pérez' },
    { id: 2, nombre: 'Mishi', especie: 'Gato', raza: 'Siames', edad: 2, peso: 6, propietario: 'Lucía Torres' },
  ];

  constructor() { }

  // 📋 Obtener todas las mascotas
  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  // 🔍 Buscar mascota por ID
  getMascotaById(id: number): Mascota | undefined {
    return this.mascotas.find(m => m.id === id);
  }

  // ➕ Registrar nueva mascota
  addMascota(mascota: Mascota): void {
    mascota.id = this.mascotas.length + 1;
    this.mascotas.push(mascota);
  }

  // ✏️ Actualizar mascota
  updateMascota(id: number, mascotaActualizada: Mascota): void {
    const index = this.mascotas.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mascotas[index] = mascotaActualizada;
    }
  }

  // ❌ Eliminar mascota
  deleteMascota(id: number): void {
    this.mascotas = this.mascotas.filter(m => m.id !== id);
  }

  // ✅ Obtener mascotas por cliente
  getMascotasByCliente(propietario: string): Mascota[] {
    return this.mascotas.filter(m => m.propietario === propietario);
  }
}
