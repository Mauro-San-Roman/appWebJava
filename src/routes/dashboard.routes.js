import { Router } from 'express';
import * as ctrl from '../controllers/dashboard.controller.js';
import { verificarToken } from '../middlewares/middleware.js';

const router = Router();

// Definición de endpoints
router.get('/',verificarToken, ctrl.obtenerStockBajo);
router.get('/',verificarToken, ctrl.obtenerTotales);

export default router;