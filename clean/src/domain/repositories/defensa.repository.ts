// domain/repositories/defensa.repository.ts

import { Defensa } from '../entities/defensa.entity';
import { CrearDefensaDto } from '../dtos/defensa/crear-defensa.dto';
import { ActualizarDefensaDto } from '../dtos/defensa/actualizar-defensa.dto';

export abstract class DefensaRepository {
  abstract create(dto: CrearDefensaDto): Promise<Defensa>;
  abstract findById(id: string): Promise<Defensa | null>;
  abstract findAll(): Promise<Defensa[]>;
  abstract updateById(dto: ActualizarDefensaDto): Promise<Defensa>;
  abstract assignSala(defensaId: string, salaId: number): Promise<void>;
  abstract assignHorario(defensaId: string, horarioId: string): Promise<void>;
  abstract assignEstudiantes(defensaId: string, estudianteIds: string[]): Promise<void>;
  abstract markAsCompleted(defensaId: string): Promise<void>;
}
