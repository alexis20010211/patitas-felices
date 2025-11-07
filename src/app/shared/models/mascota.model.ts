import { Cita } from './cita.model';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  peso: number;
  propietario: string;
  historial?: Cita[]; // Historial de citas
}
