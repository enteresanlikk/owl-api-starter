'use strict';
import express from 'express';
import youtubeCtrl from '../controllers/youtube.controller';
import errorHandler from '../utils/error.util';

const router = express.Router();

router.get('/videos/:videoId', errorHandler(youtubeCtrl.getVideo));

export default router;