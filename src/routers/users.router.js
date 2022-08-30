'use strict';
import express from 'express';
import userCtrl from '../controllers/users.controller';
import userValidation from '../validations/users.validation';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

const router = express.Router();

router.get('/', authMiddleware, userCtrl.getAll);
router.post('/', authMiddleware, userValidation.create, validationMiddleware, userCtrl.create);
router.put('/:id', authMiddleware, userValidation.update, validationMiddleware, userCtrl.update);
router.delete('/:id', authMiddleware, userCtrl.delete);
router.get('/:id', authMiddleware, userCtrl.get);

export default router;