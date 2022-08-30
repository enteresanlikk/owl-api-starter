'use strict';
import express from 'express';
import authCtrl from '../controllers/auth.controller';
import authValidation from '../validations/auth.validation';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

const router = express.Router();

router.post('/login', authValidation.login, validationMiddleware, authCtrl.login);
router.post('/register', authValidation.register, validationMiddleware, authCtrl.register);
router.get('/profile', authMiddleware, authCtrl.profile);

export default router;