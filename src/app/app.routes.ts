import { Routes } from '@angular/router';

// 🐶 Mascotas
import { MascotasComponent } from '../app/mascotas/mascotas/mascotas';
import { RegistroMascotaComponent } from '../app/mascotas/registro-mascota/registro-mascota';
import { HistorialMascotaComponent } from '../app/mascotas/historial-mascota/historial-mascota';

// 📅 Citas
import { CitasComponent } from '../app/citas/citas/citas';
import { AgendaCitaComponent } from '../app/citas/agenda-citas/agenda-citas';
import { DetalleCitaComponent } from '../app/citas/detalle-cita/detalle-cita';

// 🏠 Home
import { HomeComponent } from '../app/home/home';

// 🔐 Auth
import { LoginComponent } from '../app/auth/login';

// 👑 Admin Layout + Views
import { AdminLayoutComponent } from '../app/admin/admin-layout/admin-layout';
import { AdminDashboardComponent } from '../app/admin/admin-dashboard/admin-dashboard';
import { AdminPanelComponent } from '../app/admin/admin-panel/admin-panel';

// Clientes + Usuarios
import { UsuariosComponent } from '../app/usuarios/usuarios/usuarios';

// 🛡️ Guard and Roles
import { AuthGuard } from '../app/auth/auth.guard';
import { Role } from '../app/auth/role.enum';

// Cliente
import { ClienteDashboardComponent } from '../app/cliente/cliente-dashboard/cliente-dashboard';

// Veterinario
import { VeterinarioDashboardComponent } from '../app/veterinario/veterinario-dashboard/veterinario-dashboard';

// Servicios
import { ServicesComponent } from '../app/home/services/services';
import { SpecialtiesComponent } from '../app/home/specialties/specialties';

export const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'auth/login', component: LoginComponent },

  // ==========================
  //      ADMIN
  // ==========================
  {
    path: 'admin',
    component: AdminLayoutComponent, // ✅ Nuevo Layout
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Admin },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'panel', component: AdminPanelComponent },

      // 🐶 Mascotas
      { path: 'mascotas', component: MascotasComponent },
      { path: 'registro-mascota', component: RegistroMascotaComponent },
      { path: 'mascotas/:id/historial', component: HistorialMascotaComponent },

      // 📅 Citas
      { path: 'citas', component: CitasComponent },
      { path: 'agenda-citas', component: AgendaCitaComponent },
      { path: 'detalle-cita/:id', component: DetalleCitaComponent },

      // 👥 Usuarios
      { path: 'usuarios', component: UsuariosComponent },

      // 🧪 Servicios
      { path: 'servicios', component: ServicesComponent },
      { path: 'especialidades', component: SpecialtiesComponent },

      // ⚙ Config
      { path: 'config', component: AdminPanelComponent },
    ]
  },

  // ==========================
  //      VETERINARIO
  // ==========================
  {
    path: 'veterinario',
    component: VeterinarioDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Veterinario },
    children: [
      { path: '', redirectTo: 'agenda-citas', pathMatch: 'full' },
      { path: 'agenda-citas', component: AgendaCitaComponent },
      { path: 'detalle-cita/:id', component: DetalleCitaComponent }
    ]
  },

  // ==========================
  //      CLIENTE
  // ==========================
  {
    path: 'cliente',
    component: ClienteDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Cliente },
    children: [
      { path: '', redirectTo: 'mascotas', pathMatch: 'full' },
      { path: 'mascotas', component: MascotasComponent },
      { path: 'mascotas/:id/historial', component: HistorialMascotaComponent },
      { path: 'citas', component: CitasComponent }
    ]
  },

  { path: '**', redirectTo: 'home' }
];
