import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/registro.controller.js';
const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllRegistro);
router.get('/:id', ctrl.getRegistroById);
router.post('/', verificarToken,ctrl.agregarRegistro);
router.put('/:id',verificarToken, ctrl.actualizarRegistro);
router.delete('/:id', verificarToken,ctrl.eliminarRegistro);

export default router;