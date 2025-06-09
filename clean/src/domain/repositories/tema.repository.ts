// domain/repositories/tema.repository.ts

import { Tema } from '../entities/tema.entity';

export abstract class TemaRepository {
  abstract findByNombre(nombre: string): Promise<Tema | null>;
  abstract findAll(): Promise<Tema[]>;
  abstract create(tema: Tema): Promise<Tema>;
}
