import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cita } from '../shared/models/cita.model';
import { Mascota } from '../shared/models/mascota.model';

@Injectable({ providedIn: 'root' })
export class AdminService {

  // Contadores y KPIs
  private mascotas$ = new BehaviorSubject<number>(92);
  private ingresos$ = new BehaviorSubject<number>(1500);
  private citas$ = new BehaviorSubject<number>(24);
  private clientes$ = new BehaviorSubject<number>(53);

  // Eventos recientes
  private eventos$ = new BehaviorSubject<string[]>([
    'Sistema iniciado',
    'Copia de seguridad completada',
    'Administrador conectado'
  ]);

  // Listado de citas (para admin)
  private citasAdmin$ = new BehaviorSubject<Cita[]>([
    { id: 1, fecha: '2025-11-10', hora: '10:00', motivo: 'Vacunación', mascotaId: 0, veterinario: 'Dra. López' },
    { id: 2, fecha: '2025-11-15', hora: '14:00', motivo: 'Chequeo general', mascotaId: 1, veterinario: 'Dr. Ramos' },
  ]);

  // Observables públicos
  getMascotas() { return this.mascotas$.asObservable(); }
  getIngresos() { return this.ingresos$.asObservable(); }
  getCitas() { return this.citas$.asObservable(); }
  getClientes() { return this.clientes$.asObservable(); }
  getEventos() { return this.eventos$.asObservable(); }
  getCitasAdmin() { return this.citasAdmin$.asObservable(); }

  // Métodos para actualizar KPIs (botones demo)
  addMascotaCount(n = 1) { this.mascotas$.next(this.mascotas$.value + n); }
  addCitaCount(n = 1) { this.citas$.next(this.citas$.value + n); }
  addClienteCount(n = 1) { this.clientes$.next(this.clientes$.value + n); }
  addIngreso(amount = 0) { this.ingresos$.next(this.ingresos$.value + amount); }
  addEvento(text: string) { this.eventos$.next([text, ...this.eventos$.value]); }

  // -----------------------------
  // Funcionalidades Admin
  // -----------------------------

  // Agregar cita
  agregarCita(cita: Cita) {
    this.citasAdmin$.next([...this.citasAdmin$.value, cita]);
    this.addCitaCount();
    this.addEvento(`Cita agregada: ${cita.motivo} - ${cita.fecha}`);
  }

  // Editar cita
  editarCita(citaId: number, datos: Partial<Cita>) {
    const updated = this.citasAdmin$.value.map(c =>
      c.id === citaId ? { ...c, ...datos } : c
    );
    this.citasAdmin$.next(updated);
    this.addEvento(`Cita editada: ID ${citaId}`);
  }

  // Eliminar cita
  eliminarCita(citaId: number) {
    const updated = this.citasAdmin$.value.filter(c => c.id !== citaId);
    this.citasAdmin$.next(updated);
    this.addCitaCount(-1);
    this.addEvento(`Cita eliminada: ID ${citaId}`);
  }

  // Simulación de registro de cliente
  agregarClienteDemo() {
    this.addClienteCount();
    this.addEvento('Cliente demo agregado 👤');
  }

  // Simulación de ingreso económico
  agregarIngresoDemo(amount = 200) {
    this.addIngreso(amount);
    this.addEvento(`Ingreso demo registrado: S/ ${amount}`);
  }

}
