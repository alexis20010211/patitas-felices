import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private mascotas$ = new BehaviorSubject<number>(92);
  private ingresos$ = new BehaviorSubject<number>(1500);
  private citas$ = new BehaviorSubject<number>(24);
  private clientes$ = new BehaviorSubject<number>(53);
  private eventos$ = new BehaviorSubject<string[]>([
    'Sistema iniciado',
    'Copia de seguridad completada',
    'Administrador conectado'
  ]);

  getMascotas() { return this.mascotas$.asObservable(); }
  getIngresos() { return this.ingresos$.asObservable(); }
  getCitas() { return this.citas$.asObservable(); }
  getClientes() { return this.clientes$.asObservable(); }
  getEventos() { return this.eventos$.asObservable(); }

  addMascotaCount(n = 1) { this.mascotas$.next(this.mascotas$.value + n); }
  addIngreso(amount = 0) { this.ingresos$.next(this.ingresos$.value + amount); }
  addEvento(text: string) { this.eventos$.next([text, ...this.eventos$.value]); }
}
