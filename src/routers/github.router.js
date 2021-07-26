'use strict';
import express from 'express';
import githubCtrl from '../controllers/github.controller';
const router = express.Router();

router.get('/:username', githubCtrl.get);

export default router;