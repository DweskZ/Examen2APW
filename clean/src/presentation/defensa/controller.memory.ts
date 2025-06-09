// presentation/defensa/controller.memory.ts

import { Request, Response } from 'express';
import { CrearDefensaDto } from '../../domain/dtos/defensa/crear-defensa.dto';
import { DefensaJsonDatasource } from '../../domain/datasources/defensa.datasource';

// Instancia única para mantener el estado en memoria
const defensaRepo = new DefensaJsonDatasource();

export class DefensaControllerMemory {

  static async crearDefensa(req: Request, res: Response) {
    const [error, dto] = CrearDefensaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      const defensa = await defensaRepo.create(dto!);
      return res.status(201).json(defensa);
    } catch (e) {
      return res.status(500).json({ error: 'Error al crear la defensa' });
    }
  }

  static async listarDefensas(req: Request, res: Response) {
    try {
      const defensas = await defensaRepo.findAll();
      return res.json(defensas);
    } catch (e) {
      return res.status(500).json({ error: 'Error al obtener las defensas' });
    }
  }

  static async obtenerDefensaPorId(req: Request, res: Response) {
    const { id } = req.params;
    const defensa = await defensaRepo.findById(id);
    if (!defensa) return res.status(404).json({ error: 'Defensa no encontrada' });

    return res.json(defensa);
  }
}
