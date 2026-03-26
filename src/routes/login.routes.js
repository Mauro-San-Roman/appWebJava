import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller.js';

const router = Router();
router.post('/login/cliente', authCtrl.loginCliente);
router.post('/login/trabajador', authCtrl.loginTrabajador);

export default router;