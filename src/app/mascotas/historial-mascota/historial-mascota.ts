import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../shared/services/cita.service';
import { MascotaService } from '../../shared/services/mascota.service';
import { Cita } from '../../shared/models/cita.model';
import { Mascota } from '../../shared/models/mascota.model';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private mascotaService: MascotaService,
    private citaService: CitaService
  ) {}

  ngOnInit(): void {
    this.mascotas = this.mascotaService.getMascotas();
  }

  verHistorial(): void {
    if (this.idSeleccionado) {
      this.citas = this.citaService.getCitasByMascota(this.idSeleccionado);
    }
  }
}
