'use strict';
import { check } from 'express-validator';
import messages  from '../constants/messages.constant';

export default {
    login() {
        return [
            check('username').not().isEmpty().withMessage(messages.validation.required),
            check('password').not().isEmpty().withMessage(messages.validation.required)
        ]
    },
    register() {
        return [
            check('username').not().isEmpty().withMessage(messages.validation.required),
            check('name').not().isEmpty().withMessage(messages.validation.required),
            check('surname').not().isEmpty().withMessage(messages.validation.required),
            check('password').not().isEmpty().withMessage(messages.validation.required)
        ]
    }
};