import { Router } from 'express';
import * as ctrl from '../controllers/mensajes.controller.js';

const router = Router();

// Definición de endpoints para Mensajes (Nombres corregidos)
router.get('/', ctrl.obtenerMensajes);
router.post('/', ctrl.crearMensaje);
router.delete('/:id', ctrl.borrarMensaje);
router.put('/:id', ctrl.modificarMensaje); // Faltaba el ctrl. aquí

export default router;