import { Router } from 'express';
import * as ctrl from '../controllers/videos.controller.js';

const router = Router();

router.get('/', ctrl.getAllVideos);

export default router;