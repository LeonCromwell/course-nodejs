import express from 'express';
const router = express.Router();

import courseController from '../app/controllers/CourseController.js';

router.get('/create', courseController.create);
router.post('/store', courseController.store);

router.delete('/:id', courseController.destroy);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.get('/:slug', courseController.show);

export default router;
