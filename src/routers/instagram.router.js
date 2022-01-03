'use strict';
import express from 'express';
import instagramCtrl from '../controllers/instagram.controller';

const router = express.Router();

router.get('/:username', instagramCtrl.get);

export default router;