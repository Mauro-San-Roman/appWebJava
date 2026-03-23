import { Router } from 'express';
import * as ctrl from '../controllers/dashboard.controller.js';
import { verificarToken } from '../middlewares/middleware.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.obtenerStockBajo);
router.get('/', ctrl.obtenerTotales);

export default router;