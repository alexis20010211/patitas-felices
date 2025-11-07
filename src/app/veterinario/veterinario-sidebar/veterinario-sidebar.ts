import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-veterinario-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './veterinario-sidebar.html',
  styleUrls: ['./veterinario-sidebar.css']
})
export class VeterinarioSidebarComponent {}
