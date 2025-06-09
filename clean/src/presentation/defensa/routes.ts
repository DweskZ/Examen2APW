// presentation/routes.ts

import { Router, Request, Response } from 'express';
import { DefensaMemoryRoutes } from './defensa.routes.memory';

export class AppRoutes {

  static get routes(): Router {
    const router = Router();

    // Conectamos las rutas de defensa memory
    router.use('/api/defensas-memory', DefensaMemoryRoutes.routes);

    // Endpoint de info del sistema
    router.get('/api/system/info', (req: Request, res: Response) => {
      res.json({
        message: 'Sistema de Gestión de Defensas',
        version: '1.0.0',
        endpoints: {
          memory: '/api/defensas-memory',
          system: '/api/system/info'
        }
      });
    });

    return router;
  }

}
