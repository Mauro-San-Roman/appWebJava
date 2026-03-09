import { Router } from 'express';
import * as ctrl from '../controllers/agenda.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllAgenda);
router.get('/:id', ctrl.getAgendaById);
router.post('/', ctrl.agregarAgenda)
router.put('/:id', ctrl.actualizarAgenda);
router.delete('/:id', ctrl.eliminarAgenda);

export default router;