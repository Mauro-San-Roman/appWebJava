import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/dashboard.controller.js';

const router = Router();

router.get('/bajo-stock', verificarToken, ctrl.obtenerStockBajo);
router.get('/totales', verificarToken, ctrl.obtenerTotales);
router.get('/clientesIniciales',  ctrl.obtenerClientesIniciales);

export default router;