import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

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

  demoAddMascota(){ this.admin.addMascotaCount(1); this.admin.addEvento('Nueva mascota demo añadida'); }
  demoAddIngreso(){ this.admin.addIngreso(150); this.admin.addEvento('Ingreso demo registrado'); }
}
