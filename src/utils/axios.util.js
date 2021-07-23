'use strict';
const axios = require('axios');

module.exports.githubInstance = axios.create({
    baseURL: 'https://api.github.com',
    validateStatus: false
});