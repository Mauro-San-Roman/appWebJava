import { Router } from 'express';
import * as ctrl from '../controllers/noticias.controller.js';

const router = Router();

// Definición de endpoints para Noticias
router.get('/', ctrl.getAllNoticias);
router.post('/', ctrl.agregarNoticia);
router.put('/:id', ctrl.actualizarNoticia);
router.delete('/:id', ctrl.eliminarNoticia);

export default router;