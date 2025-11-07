import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../shared/services/mascota.service';
import { Mascota } from '../../shared/models/mascota.model';

@Component({
  selector: 'app-registro-mascota',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-mascota.html',
  styleUrls: ['./registro-mascota.css']
})
export class RegistroMascotaComponent implements OnInit {
  nuevaMascota: Mascota = {
    id: 0,
    nombre: '',
    especie: '',
    raza: '',
    edad: 0,
    peso: 0,
    propietario: '',
    historial: []
  };

  id: number | null = null;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      const mascotaExistente = this.mascotaService.getMascotaById(this.id);
      if (mascotaExistente) {
        this.nuevaMascota = { ...mascotaExistente };
      }
    }
  }

  registrarMascota() {
    if (!this.nuevaMascota.nombre || !this.nuevaMascota.especie) {
      alert('Por favor completa los campos requeridos.');
      return;
    }

    if (this.id) {
      this.mascotaService.updateMascota(this.id, this.nuevaMascota);
      alert('🐾 Mascota actualizada exitosamente!');
    } else {
      this.mascotaService.addMascota({ ...this.nuevaMascota });
      alert('🐾 Mascota registrada exitosamente!');
    }

    this.router.navigate(['/admin/mascotas']);
  }
}
