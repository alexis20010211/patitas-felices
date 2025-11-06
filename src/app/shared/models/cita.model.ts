/**
 * Modelo Cita
 * Representa la información de una cita veterinaria.
 */
export interface Cita {
  id: number;              // Identificador de la cita
  fecha: string;           // Fecha de la cita (formato ISO)
  hora: string;            // Hora de la cita
  motivo: string;          // Motivo o descripción
  veterinario: string;     // Nombre del veterinario
  mascotaId: number;       // Relación con la mascota
}
