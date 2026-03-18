import { Router } from 'express';
import * as ctrl from '../controllers/trabajadores.controller.js';
import { verificarToken } from '../middlewares/middleware.js';

const router = Router();

// Todo el módulo de trabajadores debe estar protegido
router.get('/', verificarToken, ctrl.getAllTrabajadores);
router.get('/:id', verificarToken, ctrl.getTrabajadorById);
router.post('/', verificarToken, ctrl.agregarTrabajador);
router.put('/:id', verificarToken, ctrl.actualizarTrabajador);
router.delete('/:id', verificarToken, ctrl.eliminarTrabajador);

export default router;