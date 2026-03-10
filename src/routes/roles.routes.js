import { Router } from 'express';
import * as ctrl from '../controllers/roles.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllRoles);
router.get('/:id', ctrl.getRolById);
router.post('/', ctrl.agregarRol);
router.put('/:id', ctrl.actualizarRol);
router.delete('/:id', ctrl.eliminarRol);

export default router;