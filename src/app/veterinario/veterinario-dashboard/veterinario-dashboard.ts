import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veterinario-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veterinario-dashboard.html',
  styleUrls: ['./veterinario-dashboard.css']
})
export class VeterinarioDashboardComponent {

  // 📌 Citas de ejemplo
  citas = [
    { id: 1, fecha: '2025-11-10', hora: '10:00', mascota: 'Firulais', cliente: 'Carlos Pérez', estado: 'Pendiente' },
    { id: 2, fecha: '2025-11-11', hora: '14:00', mascota: 'Mishi', cliente: 'Lucía Torres', estado: 'Pendiente' }
  ];

  citaSeleccionada: any = null;

  // 📝 Función para abrir modal y editar cita
  editarCita(cita: any) {
    this.citaSeleccionada = { ...cita }; // Clonamos la cita para edición
  }

  // 💾 Guardar cambios de la cita editada
  guardarCambios() {
    if (!this.citaSeleccionada) return;
    const index = this.citas.findIndex(c => c.id === this.citaSeleccionada.id);
    if (index !== -1) {
      this.citas[index] = { ...this.citaSeleccionada };
      alert('✅ Cambios guardados correctamente');
      this.cerrarModal();
    }
  }

  // ❌ Cerrar modal sin guardar
  cerrarModal() {
    this.citaSeleccionada = null;
  }

  // 🔄 Cambiar estado directamente desde el select
  cambiarEstado(cita: any) {
    alert(`Estado de la cita de ${cita.mascota} cambiado a: ${cita.estado}`);
  }

  // 📖 Ver historial de la mascota
  verHistorial(cita: any) {
    alert(`📝 Ver historial de ${cita.mascota}`);
  }

  // 🗑 Cancelar cita
  cancelarCita(id: number) {
    if (confirm('¿Deseas cancelar esta cita?')) {
      this.citas = this.citas.filter(c => c.id !== id);
      alert('✅ Cita cancelada');
    }
  }
}
