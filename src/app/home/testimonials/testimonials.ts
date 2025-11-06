import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'Carlos Pérez', message: 'Excelente atención a mi perro!' },
    { name: 'Lucía Torres', message: 'Muy confiables y profesionales.' }
  ];
}
