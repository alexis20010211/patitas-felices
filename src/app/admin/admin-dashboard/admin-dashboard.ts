import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  totalMascotas$!: Observable<number>;
  ingresosHoy$!: Observable<number>;
  citasHoy$!: Observable<number>;
  clientesActivos$!: Observable<number>;
  eventos$!: Observable<string[]>;

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.totalMascotas$ = this.admin.getMascotas();
    this.ingresosHoy$ = this.admin.getIngresos();
    this.citasHoy$ = this.admin.getCitas();
    this.clientesActivos$ = this.admin.getClientes();
    this.eventos$ = this.admin.getEventos();
  }

  // Funciones demo habilitadas
  agregarMascota() {
    this.admin.addMascotaCount(1);
    this.admin.addEvento('Nueva mascota agregada');
  }

  agregarIngreso() {
    this.admin.addIngreso(200);
    this.admin.addEvento('Ingreso registrado');
  }

  agregarCita() {
    this.admin.addCitaCount(1);
    this.admin.addEvento('Nueva cita registrada');
  }

  agregarCliente() {
    this.admin.addClienteCount(1);
    this.admin.addEvento('Nuevo cliente agregado');
  }
}
