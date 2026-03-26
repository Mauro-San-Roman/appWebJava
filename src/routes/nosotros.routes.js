import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/nosotros.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllNosotros);
router.get('/:id', ctrl.getNosotrosById);
router.post('/',verificarToken, ctrl.agregarNosotros)
router.put('/:id',verificarToken, ctrl.actualizarNosotros);
router.delete('/:id',verificarToken, ctrl.eliminarNosotros);

export default router;