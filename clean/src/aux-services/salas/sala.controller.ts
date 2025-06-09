import { Request, Response } from 'express';
import { SalaService } from './sala.service';

const salaService = new SalaService();

export class SalaController {
  getAll = (req: Request, res: Response) => {
    res.json(salaService.getAll());
  };

  create = (req: Request, res: Response) => {
    const { nombre, ubicacion } = req.body;

    if (!nombre || !ubicacion) {
      return res.status(400).json({ error: 'Nombre y ubicación son requeridos' });
    }

    const nuevaSala = salaService.create(nombre, ubicacion);
    res.status(201).json(nuevaSala);
  };

  getById = (req: Request, res: Response) => {
    const id = +req.params.id;
    const sala = salaService.getById(id);
    if (!sala) return res.status(404).json({ error: 'Sala no encontrada' });
    res.json(sala);
  };

  delete = (req: Request, res: Response) => {
    const id = +req.params.id;
    const ok = salaService.delete(id);
    if (!ok) return res.status(404).json({ error: 'No se pudo eliminar' });
    res.json({ message: 'Eliminado correctamente' });
  };
}
