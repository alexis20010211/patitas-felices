import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-header.html',
  styleUrls: ['./admin-header.css']
})
export class AdminHeaderComponent {

  @Output() toggleSidebar = new EventEmitter<void>();

  userName: string = 'Administrador'; // Se puede reemplazar por login real

  constructor(private router: Router) {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']); // Redirección Angular
  }

}
