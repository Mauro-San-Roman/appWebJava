import { Router } from 'express';
import * as ctrl from '../controllers/clientes.controller.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllClientes);
router.get('/:id', ctrl.getClienteById);
router.post('/', ctrl.agregarCliente)
router.put('/:id', ctrl.actualizarCliente);
router.delete('/:id', ctrl.eliminarCliente);

export default router;