import { Router } from 'express';
import * as ctrl from '../controllers/marcas.controller.js';

const router = Router();

// Definición de endpoints para Inicio
router.get('/', ctrl.getAllMarcas);
router.put('/:id', ctrl.getMarcasById);

export default router;