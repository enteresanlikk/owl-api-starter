'use strict';
import express from 'express';
import instagramCtrl from '../controllers/instagram.controller';
import errorHandler from '../utils/error.util';

const router = express.Router();

router.get('/:username', errorHandler(instagramCtrl.get));

export default router;