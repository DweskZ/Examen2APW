import { Router } from 'express';
import { DefensaMemoryController } from './controller.memory';

export class DefensaMemoryRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new DefensaMemoryController();

    router.get('/', controller.getDefensas);
    router.get('/:id', controller.getDefensaById);
    router.post('/', controller.createDefensa);

    // Rutas adicionales de memoria (opcional)
    router.delete('/memory/clear', controller.deleteAll);

    return router;
  }
}
