'use strict';
import express from 'express';
import authCtrl from '../controllers/auth.controller';
import authValidation from '../validations/auth.validation';
import validationUtil from '../utils/validation.util';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/login', authValidation.login(), validationUtil.validate, authCtrl.login);
router.post('/register', authValidation.register(), validationUtil.validate, authCtrl.register);
router.get('/profile', authMiddleware, authCtrl.profile);

export default router;