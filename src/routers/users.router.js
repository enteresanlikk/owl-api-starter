'use strict';
import express from 'express';
import userCtrl from '../controllers/users.controller';
import userValidation from '../validations/users.validation';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import errorHandler from '../utils/error.util';

const router = express.Router();

router.get('/', authMiddleware, errorHandler(userCtrl.getAll));
router.post('/', authMiddleware, userValidation.create, validationMiddleware, errorHandler(userCtrl.create));
router.put('/:id', authMiddleware, userValidation.update, validationMiddleware, errorHandler(userCtrl.update));
router.delete('/:id', authMiddleware, errorHandler(userCtrl.delete));
router.get('/:id', authMiddleware, errorHandler(userCtrl.get));

export default router;