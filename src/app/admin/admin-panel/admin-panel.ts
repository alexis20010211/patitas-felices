import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanelComponent {

  announcementForm: FormGroup;
  events: string[] = [
    'Sistema iniciado',
    'Copia de seguridad completada',
    'Administrador conectado'
  ];

  constructor(private fb: FormBuilder) {
    this.announcementForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.announcementForm.invalid) return;
    const { title, message } = this.announcementForm.value;
    this.events.unshift(`[Anuncio] ${title}: ${message}`);
    this.announcementForm.reset();
  }

  simulateNewMascota(): void {
    this.events.unshift('Nueva mascota registrada 🐶');
  }

  simulateIngreso(): void {
    this.events.unshift('Nuevo ingreso registrado 💰');
  }
}
