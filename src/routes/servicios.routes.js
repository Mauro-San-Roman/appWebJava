import { Router } from 'express';
import * as ctrl from '../controllers/servicios.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllServicios);
router.get('/:id', ctrl.getServicioById);
router.post('/', ctrl.agregarServicio)
router.put('/:id', ctrl.actualizarServicio);
router.delete('/:id', ctrl.eliminarServicio);

export default router;