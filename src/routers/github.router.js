'use strict';
const express = require('express');
const router = express.Router();

const githubCtrl = require('../controllers/github.controller');

router.get('/:username', githubCtrl.get);

module.exports = router;