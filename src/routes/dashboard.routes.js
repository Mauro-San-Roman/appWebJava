import { Router } from 'express';
import * as ctrl from '../controllers/dashboard.controller.js';
// Importación del token comentada temporalmente
// import { verificarToken } from '../middlewares/middleware.js'; 

const router = Router();

// Endpoints LIBERADOS para hacer pruebas directas en el navegador o Postman
router.get('/bajo-stock', ctrl.obtenerStockBajo);
router.get('/totales', ctrl.obtenerTotales);

export default router;