import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergency.html',
  styleUrls: ['./emergency.css']
})
export class EmergencyComponent {
  phone = '+51 999 999 999';
}
