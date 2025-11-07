import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VeterinarioHeaderComponent } from '../veterinario-header/veterinario-header';
import { VeterinarioSidebarComponent } from '../veterinario-sidebar/veterinario-sidebar';

@Component({
  selector: 'app-veterinario-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, VeterinarioHeaderComponent, VeterinarioSidebarComponent],
  templateUrl: './veterinario-panel.html',
  styleUrls: ['./veterinario-panel.css']
})
export class VeterinarioPanelComponent {}
