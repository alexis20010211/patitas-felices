import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero';
import { ServicesComponent } from './services/services';
import { SpecialtiesComponent } from './specialties/specialties';
import { EmergencyComponent } from './emergency/emergency';
import { TestimonialsComponent } from './testimonials/testimonials';
import { FooterComponent } from './footer/footer';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    SpecialtiesComponent,
    EmergencyComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
