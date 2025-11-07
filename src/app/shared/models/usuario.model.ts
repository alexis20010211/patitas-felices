export type Rol = 'ADMIN' | 'VETERINARIO' | 'CLIENTE';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
}
