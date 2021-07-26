'use strict';
import axios from 'axios';

export const githubInstance = axios.create({ baseURL: 'https://api.github.com', validateStatus: false });