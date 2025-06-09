// domain/repositories/docente.repository.ts

import { Docente } from '../entities/docente.entity';

export abstract class DocenteRepository {
  abstract findById(id: string): Promise<Docente | null>;
  abstract findAll(): Promise<Docente[]>;
}
