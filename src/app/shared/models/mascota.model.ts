/**
 * Modelo Mascota
 * Representa la información principal de una mascota en el sistema.
 */
export interface Mascota {
  id: number;              // Identificador único
  nombre: string;          // Nombre de la mascota
  especie: string;         // Ejemplo: perro, gato, conejo
  raza: string;            // Ejemplo: bulldog, persa
  edad: number;            // Edad en años
  peso: number;            // Peso en kg
  propietario: string;     // Nombre del dueño
}
