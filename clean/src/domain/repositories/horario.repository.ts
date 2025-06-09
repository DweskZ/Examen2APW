// domain/repositories/horario.repository.ts

import { HorarioReservado } from '../entities/horario.entity';

export abstract class HorarioRepository {
  abstract findById(id: string): Promise<HorarioReservado | null>;
  abstract findBySala(salaId: number): Promise<HorarioReservado[]>;
  abstract isDisponible(salaId: number, inicio: Date, fin: Date): Promise<boolean>;
  abstract reservar(horario: HorarioReservado): Promise<HorarioReservado>;
  abstract delete(id: string): Promise<void>;
}
