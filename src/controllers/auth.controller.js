'use strict';
import httpStatus from 'http-status';

import userService from '../services/user.service';
import { SuccessDataResult, SuccessResult, ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';
import jwtService from '../services/jwt.service';

export default {
    async login(req, res) {
        const {
            username,
            password
        } = req.body;

        const user = await userService.getByUsernameAndPassword(username, password);

        if(!user) {
            return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.notFound));
        }

        const token = jwtService.generateToken(user);

        return res.status(httpStatus.OK).json(new SuccessDataResult({ token }, messages.user.found));
    },
    async register(req, res) {
        const {
            username,
            name,
            surname,
            password
        } = req.body;

        const user = await userService.getByUsername(username);

        if(user) {
            return res.status(httpStatus.BAD_REQUEST).json(new ErrorResult(messages.user.alreadyAdded));
        }

        const newUser = await userService.create({
            username,
            name,
            surname,
            password
        });

        if(newUser) {
            const token = jwtService.generateToken(newUser);

            return res.status(httpStatus.CREATED).json(new SuccessDataResult({ token }, messages.user.successAdded));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.errorAdded));
    },
    async profile(req, res) {
        const user = await userService.getById(req.user.id);

        if(!user) {
            return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.notFound));
        }
        return res.status(httpStatus.OK).json(new SuccessResult(user, messages.user.found));
    }
}