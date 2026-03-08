import { Router } from 'express';
import * as ctrl from '../controllers/nosotros.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllNosotros);
router.get('/:id', ctrl.getNosotrosById);
router.post('/', ctrl.agregarNosotros)
router.put('/:id', ctrl.actualizarNosotros);
router.delete('/:id', ctrl.eliminarNosotros);

export default router;