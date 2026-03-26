import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/mensajes.controller.js';

const router = Router();

// Definición de endpoints para Mensajes
router.get('/', ctrl.getAllMensajes);
router.post('/', ctrl.crearMensaje);
router.delete('/:id',verificarToken, ctrl.borrarMensaje);
router.put('/:id',verificarToken, ctrl.modificarMensaje);

export default router;