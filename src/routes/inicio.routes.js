import { Router } from 'express';
import * as ctrl from '../controllers/inicio.controller.js';

const router = Router();

// Definición de endpoints para Inicio
router.get('/:id', ctrl.getInicio);
router.put('/:id', ctrl.actualizarInicio);

export default router;