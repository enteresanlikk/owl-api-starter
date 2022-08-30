'use strict';
import express from 'express';
import githubCtrl from '../controllers/github.controller';
import errorHandler from '../utils/error.util';

const router = express.Router();

router.get('/:username', errorHandler(githubCtrl.get));

export default router;