// src/presentation/routes.ts

import { Router, Request, Response } from 'express';
import { DefensaMemoryRoutes } from './defensa/defensa.routes.memory';
import salaRoutes from '../aux-services/salas/sala.routes';


export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/defensas-memory', DefensaMemoryRoutes.routes);
    router.use('/api/salas', salaRoutes);

    router.get('/api/system/info', (_req: Request, res: Response) => {
      res.json({
        message: 'Sistema de Gestión de Defensas',
        version: '1.0.0'
      });
    });

    return router;
  }
}
