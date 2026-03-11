import { Router } from 'express';
import * as ctrl from '../controllers/contacto.controller.js';

const router = Router();

// Definición de endpoints para Contacto
router.get('/', ctrl.getContacto);
router.put('/:id', ctrl.actualizarContacto);

export default router;