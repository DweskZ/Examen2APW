// presentation/defensa/routes.memory.ts

import { Router } from 'express';
import { DefensaControllerMemory } from './controller.memory';

const router = Router();

router.post('/defensas', DefensaControllerMemory.crearDefensa);
router.get('/defensas', DefensaControllerMemory.listarDefensas);
router.get('/defensas/:id', DefensaControllerMemory.obtenerDefensaPorId);

export default router;
