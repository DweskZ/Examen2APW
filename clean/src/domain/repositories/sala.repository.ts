// domain/repositories/sala.repository.ts

import { Sala } from '../entities/sala.entity';

export abstract class SalaRepository {
  abstract findById(id: number): Promise<Sala | null>;
  abstract findAll(): Promise<Sala[]>;
  abstract create(sala: Sala): Promise<Sala>;
  abstract update(sala: Sala): Promise<Sala>;
  abstract delete(id: number): Promise<void>;
}
