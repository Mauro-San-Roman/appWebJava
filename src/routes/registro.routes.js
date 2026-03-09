import { Router } from 'express';
import * as ctrl from '../controllers/registro.controller.js';
const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllRegistro);
router.get('/:id', ctrl.getRegistroById);
router.post('/', ctrl.agregarRegistro);
router.put('/:id', ctrl.actualizarRegistro);
router.delete('/:id', ctrl.eliminarRegistro);

export default router;