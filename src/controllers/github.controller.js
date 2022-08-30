'use strict';
import httpStatus from 'http-status';

import githubService from '../services/github.service';
import { SuccessDataResult, ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

export default {
    async get(req, res) {
        const { username } = req.params;
        
        const user = await githubService.getProfile(username);

        if (user) {
            return res.status(httpStatus.OK).json(new SuccessDataResult(user, messages.user.found));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.notFound));
    }
}