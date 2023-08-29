import express from 'express';
const router = express.Router();

import courseController from '../app/controllers/CourseController.js';
router.get('/:slug', courseController.show);

export default router;
