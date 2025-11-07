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
    {
      name: 'Carlos Pérez',
      message: 'Excelente atención a mi perro, el equipo fue muy amable y profesional.',
      image: '/assets/imagen2.jpg'
    },
    {
      name: 'Lucía Torres',
      message: 'Muy confiables y atentos. Mi gato recibió el mejor cuidado posible.',
      image: '/assets/imagen3.webp'
    },
    {
      name: 'María Delgado',
      message: 'Recomiendo totalmente esta clínica. Se nota el amor que tienen por los animales.',
      image: '/assets/imagen1.jpg'
    }
  ];
}
