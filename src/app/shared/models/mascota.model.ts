import { Cita } from './cita.model';
import { Receta } from './receta.model';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  peso: number;
  propietario: string;
  historial?: Cita[];
  recetas?: Receta[];
}
