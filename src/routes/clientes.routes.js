import { Router } from 'express';
import * as ctrl from '../controllers/clientes.controller.js';
import { verificarToken } from '../middlewares/middleware.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllClientes);
router.get('/:id', ctrl.getClienteById);
router.post('/', ctrl.agregarCliente); 
router.put('/:id', verificarToken, ctrl.actualizarCliente);
router.delete('/:id', verificarToken, ctrl.eliminarCliente);

export default router;