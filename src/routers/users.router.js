'use strict';
import express from 'express';
import userCtrl from '../controllers/users.controller';
import userValidation from '../validations/users.validation';
import validationUtil from '../utils/validation.util';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', authMiddleware, userCtrl.getAll);
router.post('/', authMiddleware, userValidation.create(), validationUtil.validate, userCtrl.create);
router.put('/:id', authMiddleware, userValidation.update(), validationUtil.validate, userCtrl.update);
router.delete('/:id', authMiddleware, userCtrl.delete);
router.get('/:id', authMiddleware, userCtrl.get);

export default router;