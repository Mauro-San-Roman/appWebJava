import { Router } from 'express';
import * as ctrl from '../controllers/trabajadores.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllTrabajadores);
router.get('/:id', ctrl.getTrabajadorById);
router.post('/', ctrl.agregarTrabajador);
router.put('/:id', ctrl.actualizarTrabajador);
router.delete('/:id', ctrl.eliminarTrabajador);

export default router;