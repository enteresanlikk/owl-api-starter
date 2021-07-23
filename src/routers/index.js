'use strict';
const express = require('express');
const router = express.Router();

const users = require('./users.router');
const github = require('./github.router');

router.use('/users', users);
router.use('/github', github);

module.exports = router;