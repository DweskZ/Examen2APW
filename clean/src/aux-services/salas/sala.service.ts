import { Sala } from './sala.entity';

let salas: Sala[] = [];
let currentId = 1;

export class SalaService {
  getAll(): Sala[] {
    return salas;
  }

  create(nombre: string, ubicacion: string): Sala {
    const sala = new Sala(currentId++, nombre, ubicacion);
    salas.push(sala);
    return sala;
  }

  getById(id: number): Sala | undefined {
    return salas.find(s => s.id === id);
  }

  delete(id: number): boolean {
    const index = salas.findIndex(s => s.id === id);
    if (index === -1) return false;
    salas.splice(index, 1);
    return true;
  }
}
