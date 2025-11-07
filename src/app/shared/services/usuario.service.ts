import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Carlos Pérez', email: 'admin@patitasfelices.com', rol: 'ADMIN' },
    { id: 2, nombre: 'Lucía Torres', email: 'vet@patitasfelices.com', rol: 'VETERINARIO' },
    { id: 3, nombre: 'Ana Gómez', email: 'cliente1@patitasfelices.com', rol: 'CLIENTE' },
    { id: 4, nombre: 'Jorge Díaz', email: 'cliente2@patitasfelices.com', rol: 'CLIENTE' }
  ];

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  // ✅ Método correcto que llama tu componente
  createUsuario(usuario: Usuario): void {
    usuario.id = this.usuarios.length > 0 
      ? this.usuarios[this.usuarios.length - 1].id + 1 
      : 1;
    this.usuarios.push(usuario);
  }

  updateUsuario(id: number, usuarioActualizado: Usuario): void {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index !== -1) this.usuarios[index] = usuarioActualizado;
  }

  deleteUsuario(id: number): void {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

  filterByRol(rol: string): Usuario[] {
    if (rol === 'TODOS') return this.usuarios;
    return this.usuarios.filter(u => u.rol === rol);
  }
}
