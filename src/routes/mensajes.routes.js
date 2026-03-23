import { Router } from 'express';
import * as ctrl from '../controllers/mensajes.controller.js';

const router = Router();

// Definición de endpoints para Mensajes
router.get('/', ctrl.getAllMensajes);
router.post('/', ctrl.crearMensaje);
router.delete('/:id', ctrl.borrarMensaje);
router.put('/:id', ctrl.modificarMensaje);

export default router;