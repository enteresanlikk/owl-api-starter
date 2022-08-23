'use strict';
import { check } from 'express-validator';
import messages  from '../constants/messages.constant';

export default {
    create() {
        return [
            check('name').not().isEmpty().withMessage(messages.validation.required),
            check('surname').not().isEmpty().withMessage(messages.validation.required),
            check('username').not().isEmpty().withMessage(messages.validation.required)
        ]
    },
    update() {
        return [
            check('name').not().isEmpty().withMessage(messages.validation.required),
            check('surname').not().isEmpty().withMessage(messages.validation.required)
        ]
    }
};