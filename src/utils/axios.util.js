'use strict';
import axios from 'axios';

export const githubInstance = axios.create({ baseURL: 'https://api.github.com', validateStatus: false });
export const instagramInstance = axios.create({ baseURL: 'https://www.instagram.com', validateStatus: false });