import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/contacto.controller.js';

const router = Router();

// Definición de endpoints para Contacto
router.get('/', ctrl.getContacto);
router.put('/:id', verificarToken, ctrl.actualizarContacto);

export default router;