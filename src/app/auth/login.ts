import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('bgCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  username = '';
  password = '';
  error = '';

  private ctx!: CanvasRenderingContext2D;
  private pawParticles: PawParticle[] = [];
  private animationId: any;

  constructor(private auth: AuthService, private router: Router) {}

  ngAfterViewInit() {
    this.setupCanvas();
    this.createPaws(30); // Número de patitas
    this.animate();
  }

  login() {
    if (!this.username || !this.password) {
      this.error = 'Por favor, ingresa usuario y contraseña';
      return;
    }

    const loggedIn = this.auth.login(this.username, this.password);
    if (loggedIn) {
      const role = this.auth.currentUser!.role;

      // Redirección según rol
      if (role === Role.Admin) {
        this.router.navigate(['/admin']); // Admin dashboard
      } else if (role === Role.Veterinario) {
        this.router.navigate(['/veterinario']); // Veterinario dashboard
      } else if (role === Role.Cliente) {
        this.router.navigate(['/cliente']); // Cliente dashboard
      }
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }

  // Configuración del canvas
  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.pawParticles.forEach(p => {
      p.width = window.innerWidth;
      p.height = window.innerHeight;
    });
  }

  private createPaws(count: number) {
    for (let i = 0; i < count; i++) {
      this.pawParticles.push(new PawParticle(window.innerWidth, window.innerHeight));
    }
  }

  private animate() {
    this.ctx.fillStyle = '#000000'; // Fondo negro
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    for (const paw of this.pawParticles) {
      paw.update();
      paw.draw(this.ctx);
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Clase para patitas
class PawParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 20 + Math.random() * 20;
    this.speedY = 0.3 + Math.random() * 0.7;
    this.speedX = -0.2 + Math.random() * 0.4;
    this.rotation = Math.random() * 2 * Math.PI;
    this.rotationSpeed = -0.02 + Math.random() * 0.04;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;

    if (this.y > this.height) this.y = -this.size;
    if (this.x > this.width) this.x = -this.size;
    if (this.x < -this.size) this.x = this.width + this.size;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.fillStyle = 'rgba(255, 200, 100, 0.9)';
    const pad = this.size * 0.4;

    // Almohadilla central
    ctx.beginPath();
    ctx.ellipse(0, 0, pad, pad * 0.7, 0, 0, 2 * Math.PI);
    ctx.fill();

    // Dedos
    const offset = this.size * 0.5;
    for (let i = -1; i <= 2; i++) {
      ctx.beginPath();
      ctx.ellipse(i * pad * 0.6, -offset * 0.6, pad * 0.3, pad * 0.4, 0, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.restore();
  }
}
