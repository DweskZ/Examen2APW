// domain/repositories/estudiante.repository.ts

import { Estudiante } from '../entities/estudiante.entity';

export abstract class EstudianteRepository {
  abstract findById(id: string): Promise<Estudiante | null>;
  abstract findManyByIds(ids: string[]): Promise<Estudiante[]>;
  abstract saveMany(estudiantes: Estudiante[]): Promise<void>;
  abstract update(estudiante: Estudiante): Promise<Estudiante>;
}
