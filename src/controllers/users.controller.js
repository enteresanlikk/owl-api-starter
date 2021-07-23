'use strict';
const userService = require('../services/user.service');
const {
    SuccessDataResult,
    SuccessResult,
    ErrorResult
} = require('../utils/results');
const messages = require('../constants/messages.constant');

module.exports = {
    getAll: async (req, res) => {
        const users = await userService.getAll();
        if(users && users.length > 0) {
            return res.json(new SuccessDataResult(users, messages.users.found));
        }
        return res.status(404).json(new ErrorResult(messages.users.notFound));
    },
    get: async (req, res) => {
        const { id } = req.params;
        const user = await userService.getById(id);
        if (user) {
            return res.json(new SuccessDataResult(user, messages.user.found));
        }
        return res.status(404).json(new ErrorResult(messages.user.notFound));
    },
    create: async (req, res) => {
        const {
            name,
            surname,
            username
        } = req.body;

        const user = await userService.getByUsername(username);

        if(user) {
            return res.json(new ErrorResult(messages.user.alreadyAdded));
        }

        const newUser = await userService.create({
            name,
            surname,
            username
        });

        if(newUser) {
            return res.json(new SuccessDataResult(newUser, messages.user.successAdded));
        }

        return res.json(new ErrorResult(messages.user.errorAdded));
    },
    update: async (req, res) => {
        const {
            id,

            name,
            surname
        } = req.body;

        const user = await userService.getById(id);

        if(!user) {
            return res.status(404).json(new ErrorResult(messages.user.notFound));
        }

        const newUser = await userService.update(id, {
            name,
            surname
        });

        if(newUser) {
            return res.json(new SuccessDataResult(newUser, messages.user.successUpdated));
        }

        return res.json(new ErrorResult(messages.user.errorUpdated));
    },
    delete: async (req, res) => {
        const { id } = req.params;

        const user = await userService.getById(id);

        if(!user) {
            return res.status(404).json(new ErrorResult(messages.user.notFound));
        }

        const userDeleted = await userService.deleteById(id);

        if(userDeleted) {
            return res.json(new SuccessResult(messages.user.successDeleted));
        }

        return res.json(new ErrorResult(messages.user.errorDeleted));
    }
};