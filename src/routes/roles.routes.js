import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/roles.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllRoles);
router.get('/:id', ctrl.getRolById);
router.post('/', verificarToken,ctrl.agregarRol);
router.put('/:id',verificarToken, ctrl.actualizarRol);
router.delete('/:id',verificarToken, ctrl.eliminarRol);

export default router;