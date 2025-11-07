import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteSidebarComponent } from '../cliente-sidebar/cliente-sidebar';
import { ClienteHeaderComponent } from '../cliente-header/cliente-header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, ClienteSidebarComponent, ClienteHeaderComponent],
  templateUrl: './cliente-panel.html',
  styleUrls: ['./cliente-panel.css']
})
export class ClientePanelComponent {}
