'use strict';
import express from 'express';
import userCtrl from '../controllers/users.controller';
import userValidation from '../validation/users.validation';
import validationUtil from '../utils/validation.util';

const router = express.Router();

router.get('/', userCtrl.getAll);
router.post('/', userValidation.create(), validationUtil.validate, userCtrl.create);
router.put('/:id', userValidation.update(), validationUtil.validate, userCtrl.update);
router.delete('/:id', userCtrl.delete);
router.get('/:id', userCtrl.get);

export default router;