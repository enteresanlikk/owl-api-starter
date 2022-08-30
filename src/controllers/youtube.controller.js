'use strict';
import httpStatus from 'http-status';

import youtubeService from '../services/youtube.service';
import { SuccessDataResult, ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

export default {
    async getVideo(req, res) {
        const { videoId } = req.params;

        const video = await youtubeService.getVideo(videoId);

        if (video) {
            return res.status(httpStatus.OK).json(new SuccessDataResult(video, messages.youtube.videoFound));
        }
        
        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.youtube.videoNotFound));
    }
}