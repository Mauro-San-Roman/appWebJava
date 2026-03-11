import { Router } from 'express';
import * as ctrl from '../controllers/mensajes.controller.js';

const router = Router();

// Definición de endpoints para Mensajes
router.get('/', ctrl.getAllMensajes);
router.post('/', ctrl.agregarMensaje);
router.delete('/:id', ctrl.eliminarMensaje);

export default router;