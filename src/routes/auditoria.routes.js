import { Router } from 'express';
import * as ctrl from '../controllers/auditoria.controller.js';

const router = Router();

router.get('/', ctrl.getAllAuditoria);

export default router;