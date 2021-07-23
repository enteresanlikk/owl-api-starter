'use strict';
const githubService = require('../services/github.service');
const {
    SuccessDataResult,
    ErrorResult
} = require('../utils/results');
const messages = require('../constants/messages.constant');

module.exports = {
    get: async (req, res) => {
        const { username } = req.params;
        const user = await githubService.getProfile(username);
        if (user) {
            return res.json(new SuccessDataResult(user, messages.user.found));
        }
        return res.json(new ErrorResult(messages.user.notFound));
    }
};