'use strict';
import { youtubeInstance } from '../utils/axios.util';

export default {
    async getVideo(videoId) {
        const { data } = await youtubeInstance.get(`/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`);

        if (data && !data.error && data.items &&  data.items.length > 0) {
            return data.items[0];
        }

        return null;
    }
};