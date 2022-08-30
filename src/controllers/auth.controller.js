'use strict';
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
            return res.status(400).json(new ErrorResult(messages.user.notFound));
        }

        const token = jwtService.generateToken(user);

        return res.status(201).json(new SuccessDataResult({ token }, messages.user.found));
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
            return res.status(400).json(new ErrorResult(messages.user.alreadyAdded));
        }

        const newUser = await userService.create({
            username,
            name,
            surname,
            password
        });

        if(newUser) {
            const token = jwtService.generateToken(newUser);

            return res.status(201).json(new SuccessDataResult({ token }, messages.user.successAdded));
        }

        return res.status(400).json(new ErrorResult(messages.user.errorAdded));
    },
    async profile(req, res) {
        const user = await userService.getById(req.user.id);

        if(!user) {
            return res.status(400).json(new ErrorResult(messages.user.notFound));
        }
        return res.status(200).json(new SuccessResult(user, messages.user.found));
    }
}