import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller.js';

const router = Router();

// El registro se hace desde POST /clientes (público) o POST /trabajadores (protegido)
// Aquí solo manejamos los accesos.
router.post('/login/cliente', authCtrl.loginCliente);
router.post('/login/trabajador', authCtrl.loginTrabajador);

export default router;