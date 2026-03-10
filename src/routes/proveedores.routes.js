import { Router } from 'express';
import * as ctrl from '../controllers/proveedores.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllProveedores);
router.get('/:id', ctrl.getProveedorById);
router.post('/', ctrl.agregarProveedor);
router.put('/:id', ctrl.actualizarProveedor);
router.delete('/:id', ctrl.eliminarProveedor);

export default router;