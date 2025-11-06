import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CitaService } from '../../shared/services/cita.service';
import { MascotaService } from '../../shared/services/mascota.service';
import { Cita } from '../../shared/models/cita.model';

@Component({
  selector: 'app-detalle-cita',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-cita.html',
  styleUrls: ['./detalle-cita.css']
})
export class DetalleCitaComponent implements OnInit {
  cita?: Cita;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citaService: CitaService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.cita = this.citaService.getCitaById(id);
    }
  }

  get nombreMascota(): string {
    if (!this.cita) return 'Sin mascota';
    const mascota = this.mascotaService.getMascotaById(this.cita.mascotaId);
    return mascota ? mascota.nombre : 'Sin nombre';
  }

  volver(): void {
    this.router.navigate(['/citas']);
  }
}
