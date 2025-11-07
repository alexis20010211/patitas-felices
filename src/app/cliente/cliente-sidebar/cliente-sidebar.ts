import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-sidebar.html',
  styleUrls: ['./cliente-sidebar.css']
})
export class ClienteSidebarComponent {}
