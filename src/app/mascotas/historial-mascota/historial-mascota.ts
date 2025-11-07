import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MascotaService } from '../../shared/services/mascota.service';
import { Mascota } from '../../shared/models/mascota.model';
import { Cita } from '../../shared/models/cita.model';

@Component({
  selector: 'app-historial-mascota',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historial-mascota.html',
  styleUrls: ['./historial-mascota.css']
})
export class HistorialMascotaComponent implements OnInit {
  mascotas: Mascota[] = [];
  citas: Cita[] = [];
  idSeleccionado: number | null = null;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotas = this.mascotaService.getMascotas();
  }

  verHistorial(): void {
    if (this.idSeleccionado !== null) {
      const mascota = this.mascotaService.getMascotaById(this.idSeleccionado);
      this.citas = mascota?.historial || [];
    }
  }
}
