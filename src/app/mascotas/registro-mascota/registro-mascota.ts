import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MascotaService } from '../../shared/services/mascota.service';
import { Mascota } from '../../shared/models/mascota.model';

@Component({
  selector: 'app-registro-mascota',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-mascota.html',
  styleUrls: ['./registro-mascota.css']
})
export class RegistroMascotaComponent {
  nuevaMascota: Mascota = {
    id: 0,
    nombre: '',
    especie: '',
    raza: '',
    edad: 0,
    peso: 0,
    propietario: ''
  };

  constructor(private mascotaService: MascotaService) {}

  registrarMascota() {
    if (this.nuevaMascota.nombre && this.nuevaMascota.especie) {
      this.mascotaService.addMascota({ ...this.nuevaMascota });
      alert('🐾 Mascota registrada exitosamente!');
      this.nuevaMascota = {
        id: 0,
        nombre: '',
        especie: '',
        raza: '',
        edad: 0,
        peso: 0,
        propietario: ''
      };
    } else {
      alert('Por favor completa los campos requeridos.');
    }
  }
}
