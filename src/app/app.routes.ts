import { Routes } from '@angular/router';

// 🐶 Mascotas
import { MascotasComponent } from '../app/mascotas/mascotas/mascotas';
import { RegistroMascotaComponent } from '../app/mascotas/registro-mascota/registro-mascota';
import { HistorialMascotaComponent } from '../app/mascotas/historial-mascota/historial-mascota';

// 📅 Citas
import { AdminCitasComponent } from '../app/admin/admin-citas/admin-citas';
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
import { AdminUsuariosComponent } from '../app/admin/admin-usuarios/admin-usuarios';

// Cliente + Usuarios
import { UsuariosComponent } from '../app/usuarios/usuarios/usuarios';

// 🛡️ Guard and Roles
import { AuthGuard } from '../app/auth/auth.guard';
import { Role } from '../app/auth/role.enum';

// Cliente Components
import { ClientePanelComponent } from '../app/cliente/cliente-panel/cliente-panel';
import { ClienteDashboardComponent } from '../app/cliente/cliente-dashboard/cliente-dashboard';

// Veterinario Components
import { VeterinarioPanelComponent } from '../app/veterinario/veterinario-panel/veterinario-panel';
import { VeterinarioDashboardComponent } from '../app/veterinario/veterinario-dashboard/veterinario-dashboard';

// Servicios
import { ServicesComponent } from '../app/home/services/services';
import { SpecialtiesComponent } from '../app/home/specialties/specialties';

export const appRoutes: Routes = [

  // Ruta inicial
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Auth
  { path: 'auth/login', component: LoginComponent },

  // ==========================
  //      ADMIN
  // ==========================
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Admin },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'panel', component: AdminPanelComponent },

      // 🐶 Mascotas
      { path: 'mascotas', component: MascotasComponent },
      { path: 'registro-mascota', component: RegistroMascotaComponent },
      { path: 'registro-mascota/:id', component: RegistroMascotaComponent },
      { path: 'mascotas/:id/historial', component: HistorialMascotaComponent },

      // 📅 Citas
      { path: 'citas', component: AdminCitasComponent },
      { path: 'citas/nueva', component: AgendaCitaComponent },
      { path: 'citas/editar/:id', component: AgendaCitaComponent },
      { path: 'detalle-cita/:id', component: DetalleCitaComponent },

      // 👥 Usuarios
      { path: 'usuarios', component: AdminUsuariosComponent },

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
    component: VeterinarioPanelComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Veterinario },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: VeterinarioDashboardComponent },

      // 🐶 Mascotas
      { path: 'mascotas', component: MascotasComponent },
      { path: 'registro-mascota', component: RegistroMascotaComponent },
      { path: 'registro-mascota/:id', component: RegistroMascotaComponent },
      { path: 'mascotas/:id/historial', component: HistorialMascotaComponent },

      // 📅 Citas
      { path: 'agenda-citas', component: AgendaCitaComponent },
      { path: 'detalle-cita/:id', component: DetalleCitaComponent },
    ]
  },

  // ==========================
  //      CLIENTE
  // ==========================
  {
    path: 'cliente',
    component: ClientePanelComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: Role.Cliente },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ClienteDashboardComponent },

      // 🐶 Mascotas
      { path: 'mascotas', component: MascotasComponent },
      { path: 'registro-mascota', component: RegistroMascotaComponent },
      { path: 'registro-mascota/:id', component: RegistroMascotaComponent },
      { path: 'mascotas/:id/historial', component: HistorialMascotaComponent },

      // 📅 Citas
      { path: 'citas', component: AdminCitasComponent },
      { path: 'citas/nueva', component: AgendaCitaComponent },
      { path: 'citas/editar/:id', component: AgendaCitaComponent },
      { path: 'detalle-cita/:id', component: DetalleCitaComponent },
    ]
  },

  // Ruta comodín
  { path: '**', redirectTo: 'home' }
];
