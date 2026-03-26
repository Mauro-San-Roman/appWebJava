import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/noticias.controller.js';

const router = Router();

// Definición de endpoints para Noticias
router.get('/', ctrl.getAllNoticias);
router.post('/',verificarToken, ctrl.agregarNoticia);
router.put('/:id',verificarToken, ctrl.actualizarNoticia);
router.delete('/:id',verificarToken, ctrl.eliminarNoticia);

export default router;