'use strict';
import express from 'express';
import users from './users.router';
import github from './github.router';
import instagram from './instagram.router';
import youtube from './youtube.router';

const router = express.Router();

router.use('/users', users);
router.use('/github', github);
router.use('/instagram', instagram);
router.use('/youtube', youtube);

export default router;