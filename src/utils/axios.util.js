'use strict';
import axios from 'axios';

const defaultOptions = {
    validateStatus: false
};

export const githubInstance = axios.create({ baseURL: 'https://api.github.com', ...defaultOptions });
export const instagramInstance = axios.create({ baseURL: 'https://www.instagram.com', ...defaultOptions });
export const youtubeInstance = axios.create({ baseURL: 'https://www.googleapis.com/youtube/v3', ...defaultOptions });