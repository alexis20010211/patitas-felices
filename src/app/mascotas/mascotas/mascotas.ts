import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MascotaService } from '../../shared/services/mascota.service';
import { Mascota } from '../../shared/models/mascota.model';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascotas.html',
  styleUrls: ['./mascotas.css']
})
export class MascotasComponent implements OnInit {

  mascotas: Mascota[] = [];

  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mascotas = this.mascotaService.getMascotas();
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteMascota(id);
    this.mascotas = this.mascotaService.getMascotas(); // refrescar la lista
  }

  verHistorial(id: number) {
    // Navega a la ruta dinámica del historial de la mascota
    this.router.navigate([`/mascotas/${id}/historial`]);
  }
}
