import { Router } from 'express';
import { SalaController } from './sala.controller';

const controller = new SalaController();
const router = Router();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);

export default router;
