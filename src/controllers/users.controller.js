'use strict';
import httpStatus from 'http-status';

import userService from '../services/user.service';
import { SuccessDataResult, SuccessResult, ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

export default {
    async getAll(req, res) {
        const users = await userService.getAll();

        if(users && users.length > 0) {
            return res.status(httpStatus.OK).json(new SuccessDataResult(users, messages.users.found));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.users.notFound));
    },
    async get(req, res) {
        const { id } = req.params;

        const user = await userService.getById(id);

        if (user) {
            return res.status(httpStatus.OK).json(new SuccessDataResult(user, messages.user.found));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.notFound));
    },
    async create(req, res) {
        const {
            name,
            surname,
            username,
            password
        } = req.body;

        const user = await userService.getByUsername(username);

        if(user) {
            return res.status(httpStatus.BAD_REQUEST).json(new ErrorResult(messages.user.alreadyAdded));
        }

        const newUser = await userService.create({
            name,
            surname,
            username,
            password
        });

        if(newUser) {
            return res.status(httpStatus.CREATED).json(new SuccessDataResult(newUser, messages.user.successAdded));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.errorAdded));
    },
    async update(req, res) {
        const { id } = req.params;
        
        const {
            name,
            surname,
            password
        } = req.body;

        const user = await userService.getById(id);

        if(!user) {
            return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.notFound));
        }

        const newUser = await userService.update(id, {
            name,
            surname,
            password
        });

        if(newUser) {
            return res.status(httpStatus.OK).json(new SuccessDataResult(newUser, messages.user.successUpdated));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.errorUpdated));
    },
    async delete(req, res) {
        const { id } = req.params;

        const user = await userService.getById(id);

        if(!user) {
            return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.notFound));
        }

        const userDeleted = await userService.deleteById(id);

        if(userDeleted) {
            return res.status(httpStatus.OK).json(new SuccessResult(messages.user.successDeleted));
        }

        return res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.user.errorDeleted));
    }
}