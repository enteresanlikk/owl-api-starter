'use strict';
import express from 'express';
import users from './users.router';
import github from './github.router';
const router = express.Router();

router.use('/users', users);
router.use('/github', github);

export default router;