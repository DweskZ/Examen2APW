import { Request, Response } from 'express';
import { CrearDefensaDto } from '../../domain/dtos/defensa/crear-defensa.dto';
import { DefensaJsonDatasource } from '../../domain/datasources/defensa.datasource';
import { Defensa } from '../../domain/entities/defensa.entity';

// Instancia única del datasource en memoria
const datasource = new DefensaJsonDatasource();

export class DefensaMemoryController {

  public getDefensas = async (_req: Request, res: Response) => {
    const defensas = await datasource.findAll();
    return res.json(defensas);
  };

  public getDefensaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const defensa = await datasource.findById(id);
    if (!defensa) return res.status(404).json({ error: 'Defensa no encontrada' });
    return res.json(defensa);
  };

  public createDefensa = async (req: Request, res: Response) => {
    const [error, dto] = CrearDefensaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const defensa: Defensa = await datasource.create(dto!);
    return res.status(201).json(defensa);
  };

  public deleteAll = async (_req: Request, res: Response) => {
    (datasource as any).defensas = [];
    return res.json({ message: 'Todas las defensas eliminadas.' });
  };
}
