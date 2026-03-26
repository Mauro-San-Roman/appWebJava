import { Router } from 'express';
import * as ctrl from '../controllers/dispositivos.controller.js';
import { verificarToken } from '../middlewares/middleware.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllDispositivos);
router.get('/:id', ctrl.getDispositivoById);
router.post('/',verificarToken, ctrl.agregarDispositivo)
router.put('/:id',verificarToken, ctrl.actualizarDispositivo);
router.delete('/:id',verificarToken, ctrl.eliminarDispositivo);

export default router;