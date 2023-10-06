import express from 'express';
const router = express.Router();

import courseController from '../app/controllers/CourseController.js';

router.get('/create', courseController.create);
router.post('/store', courseController.store);

router.delete('/:id', courseController.destroy);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/remove', courseController.remove);

export default router;
