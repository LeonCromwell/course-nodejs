import express from 'express';
const router = express.Router();

import AuthController from '../app/controllers/AuthController.js';

router.get('/register', AuthController.register);
router.post('/register', AuthController.postRegister);
router.get('/login', AuthController.login);
router.post('/login', AuthController.postLogin);

export default router;
