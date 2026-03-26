import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/inicio.controller.js';

const router = Router();

// Definición de endpoints para Inicio
router.get('/', ctrl.getInicio);
router.put('/:id',verificarToken, ctrl.actualizarInicio);

export default router;