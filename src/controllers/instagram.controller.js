'use strict';
import instagramService from '../services/instagram.service';
import { SuccessDataResult, ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

export default {
    async get(req, res) {
        const { username } = req.params;

        const user = await instagramService.getProfile(username);

        if (user) {
            return res.json(new SuccessDataResult(user, messages.user.found));
        }
        
        return res.status(404).json(new ErrorResult(messages.user.notFound));
    }
}