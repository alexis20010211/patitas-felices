import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialties.html',
  styleUrls: ['./specialties.css']
})
export class SpecialtiesComponent {
  specialties = ['Pediatría', 'Cirugía', 'Dermatología', 'Odontología'];
}
