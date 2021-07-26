'use strict';
import express from 'express';
import users from './users.router';
import github from './github.router';
import instagram from './instagram.router';
const router = express.Router();

router.use('/users', users);
router.use('/github', github);
router.use('/instagram', instagram);

export default router;