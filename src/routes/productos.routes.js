import { Router } from 'express';
import * as ctrl from '../controllers/productos.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllProductos);
router.get('/:id', ctrl.getProductoById);

export default router;