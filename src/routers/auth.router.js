'use strict';
import express from 'express';
import authCtrl from '../controllers/auth.controller';
import authValidation from '../validations/auth.validation';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import errorHandler from '../utils/error.util';

const router = express.Router();

router.post('/login', authValidation.login, validationMiddleware, errorHandler(authCtrl.login));
router.post('/register', authValidation.register, validationMiddleware, errorHandler(authCtrl.register));
router.get('/profile', authMiddleware, errorHandler(authCtrl.profile));

export default router;