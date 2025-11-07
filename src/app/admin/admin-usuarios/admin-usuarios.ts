import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario, Rol } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-usuarios.html',
  styleUrls: ['./admin-usuarios.css']
})
export class AdminUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  filtroRol: string = 'TODOS';
  roles: Rol[] = ['ADMIN', 'VETERINARIO', 'CLIENTE'];
  editUsuario: Usuario | null = null;

  // ✅ Modal control
  showModalCrear: boolean = false;
  nuevoUsuario: Usuario = { id: 0, nombre: '', email: '', rol: 'CLIENTE' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  get usuariosFiltrados(): Usuario[] {
    return this.usuarioService.filterByRol(this.filtroRol);
  }

  cambiarFiltro(rol: string) {
    this.filtroRol = rol;
  }

  eliminarUsuario(id: number) {
    this.usuarioService.deleteUsuario(id);
    this.cargarUsuarios();
  }

  iniciarEdicion(usuario: Usuario) {
    this.editUsuario = { ...usuario };
  }

  guardarEdicion() {
    if (!this.editUsuario) return;
    this.usuarioService.updateUsuario(this.editUsuario.id, this.editUsuario);
    this.editUsuario = null;
    this.cargarUsuarios();
  }

  cancelarEdicion() {
    this.editUsuario = null;
  }

  // ✅ CREAR USUARIO
  abrirModalCrear() {
    this.showModalCrear = true;
    this.nuevoUsuario = { id: 0, nombre: '', email: '', rol: 'CLIENTE' };
  }

  guardarNuevoUsuario() {
    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.email) return;

    this.usuarioService.createUsuario(this.nuevoUsuario);
    this.showModalCrear = false;
    this.cargarUsuarios();
  }

  cancelarNuevoUsuario() {
    this.showModalCrear = false;
  }
}
