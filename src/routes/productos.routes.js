import { Router } from 'express';
import { verificarToken } from '../middlewares/middleware.js';
import * as ctrl from '../controllers/productos.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllProductos);
router.get('/:id', ctrl.getProductoById);
router.post('/',verificarToken, ctrl.agregarProducto)
router.put('/:id',verificarToken, ctrl.actualizarProducto);
router.delete('/:id', verificarToken,ctrl.eliminarProducto);

export default router;