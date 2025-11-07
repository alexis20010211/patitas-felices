import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-reportes.html',
  styleUrls: ['./admin-reportes.css']
})
export class AdminReportesComponent {

  totalMascotas: number = 120;
  citasPendientes: number = 8;
  ingresosMes: number = 850;

  citasPorEstado = [
    { estado: 'Pendientes', cantidad: 8 },
    { estado: 'Completadas', cantidad: 44 },
    { estado: 'Canceladas', cantidad: 5 }
  ];
}
