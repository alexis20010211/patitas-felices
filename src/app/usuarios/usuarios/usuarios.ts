import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Para ngModel

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: 'ADMIN' | 'VETERINARIO' | 'CLIENTE';
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  filtroRol: string = 'TODOS';

  ngOnInit(): void {
    this.usuarios = [
      { id: 1, nombre: 'Carlos Pérez', email: 'admin@patitasfelices.com', rol: 'ADMIN' },
      { id: 2, nombre: 'Lucía Torres', email: 'vet@patitasfelices.com', rol: 'VETERINARIO' },
      { id: 3, nombre: 'Ana Gómez', email: 'cliente1@patitasfelices.com', rol: 'CLIENTE' },
      { id: 4, nombre: 'Jorge Díaz', email: 'cliente2@patitasfelices.com', rol: 'CLIENTE' }
    ];
  }

  get usuariosFiltrados(): Usuario[] {
    if (this.filtroRol === 'TODOS') return this.usuarios;
    return this.usuarios.filter(u => u.rol === this.filtroRol);
  }

  cambiarFiltro(rol: string) {
    this.filtroRol = rol;
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }
}
