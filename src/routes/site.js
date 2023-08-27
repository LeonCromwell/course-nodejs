import express from 'express';
const router = express.Router();

import siteController from '../app/controllers/SiteController.js';

router.get('/search', siteController.search);
router.get('/', siteController.home);

export default router;
