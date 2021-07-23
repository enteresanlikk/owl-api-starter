'use strict';
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.controller');
const userValidation = require('../validation/users.validation');
const validationUtil = require('../utils/validation.util');

router.get('/', userCtrl.getAll);
router.post('/', userValidation.create(), validationUtil.validate, userCtrl.create);
router.put('/', userValidation.update(), validationUtil.validate, userCtrl.update);
router.delete('/:id', userCtrl.delete);
router.get('/:id', userCtrl.get);

module.exports = router;