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

  // ✅ MÉTODOS PARA LOS BOTONES DEL HTML

  verMascotas() {
    console.log("👉 Mostrar lista de mascotas");
    // Aquí luego podrás navegar al módulo administrador de mascotas
  }

  verCitasPendientes() {
    console.log("👉 Mostrar citas pendientes");
  }

  verIngresos() {
    console.log("👉 Mostrar detalle de ingresos");
  }

  editarEstado(estado: any) {
    console.log("✏️ Editar estado:", estado);
    alert(`Función editar aún por implementar para: ${estado.estado}`);
  }

  eliminarEstado(estado: any) {
    console.log("🗑 Eliminar estado:", estado);
    alert(`Eliminar reporte del estado: ${estado.estado}`);
  }

  generarReporte(estado: any) {
    console.log("🖨 Generar reporte:", estado);
    window.print(); // ✅ Impresión rápida
  }
}
