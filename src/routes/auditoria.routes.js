import { Router } from 'express';
import * as ctrl from '../controllers/auditoria.controller.js';
import { verificarToken } from '../middlewares/middleware.js';

const router = Router();

router.get('/', verificarToken, ctrl.getAllAuditoria);

export default router;