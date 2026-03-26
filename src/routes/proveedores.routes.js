import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/proveedores.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllProveedores);
router.get('/:id', ctrl.getProveedorById);
router.post('/', verificarToken,ctrl.agregarProveedor);
router.put('/:id',verificarToken, ctrl.actualizarProveedor);
router.delete('/:id', verificarToken,ctrl.eliminarProveedor);

export default router;