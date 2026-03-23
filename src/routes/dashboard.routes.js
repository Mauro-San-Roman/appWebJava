import { Router } from 'express';
import * as ctrl from '../controllers/dashboard.controller.js';
import { verificarToken } from '../middlewares/middleware.js'; 

const router = Router();

// Endpoints LIBERADOS para hacer pruebas directas en el navegador o Postman
router.get('/bajo-stock', verificarToken, ctrl.obtenerStockBajo);
router.get('/totales', verificarToken, ctrl.obtenerTotales);

export default router;