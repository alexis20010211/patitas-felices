import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../../shared/services/cita.service';
import { MascotaService } from '../../shared/services/mascota.service';
import { Mascota } from '../../shared/models/mascota.model';
import { Cita } from '../../shared/models/cita.model';

@Component({
  selector: 'app-agenda-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agenda-citas.html',
  styleUrls: ['./agenda-citas.css']
})
export class AgendaCitaComponent {
  formCita: FormGroup;
  mascotas: Mascota[] = [];

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {
    this.mascotas = this.mascotaService.getMascotas();

    this.formCita = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', Validators.required],
      veterinario: ['', Validators.required],
      mascotaId: [null, Validators.required]
    });
  }

  agendarCita() {
    if (this.formCita.valid) {
      const nuevaCita: Cita = this.formCita.value;
      this.citaService.addCita(nuevaCita);
      alert('✅ Cita agendada correctamente');
      this.formCita.reset();
    }
  }
}
