'use strict';
import express from 'express';
import youtubeCtrl from '../controllers/youtube.controller';

const router = express.Router();

router.get('/videos/:videoId', youtubeCtrl.getVideo);

export default router;