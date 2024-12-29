import express from 'express';
import { getMentor } from '../controller/Mentor_controller.js';
const router = express.Router();

router.get('/', getMentor);

export default router;