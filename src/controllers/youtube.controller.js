'use strict';
import youtubeService from '../services/youtube.service';
import { SuccessDataResult, ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

export default {
    async getVideo(req, res) {
        const { videoId } = req.params;

        const video = await youtubeService.getVideo(videoId);

        if (video) {
            return res.json(new SuccessDataResult(video, messages.youtube.videoFound));
        }
        
        return res.status(404).json(new ErrorResult(messages.youtube.videoNotFound));
    }
}