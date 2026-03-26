import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/servicios.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllServicios);
router.get('/:id', ctrl.getServicioById);
router.post('/',verificarToken, ctrl.agregarServicio)
router.put('/:id',verificarToken, ctrl.actualizarServicio);
router.delete('/:id',verificarToken, ctrl.eliminarServicio);

export default router;