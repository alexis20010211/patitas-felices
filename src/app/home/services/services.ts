import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  services = [
    { name: 'Consultas Médicas', icon: '🩺' },
    { name: 'Vacunas', icon: '💉' },
    { name: 'Cirugías', icon: '🏥' },
    { name: 'Emergencias', icon: '🚨' }
  ];
}
