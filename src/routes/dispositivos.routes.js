import { Router } from 'express';
import * as ctrl from '../controllers/dispositivos.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllDispositivos);
router.get('/:id', ctrl.getDispositivoById);
router.post('/', ctrl.agregarDispositivo)
router.put('/:id', ctrl.actualizarDispositivo);
router.delete('/:id', ctrl.eliminarDispositivo);

export default router;