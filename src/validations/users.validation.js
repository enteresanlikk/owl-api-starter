'use strict';
import { check } from 'express-validator';
import messages  from '../constants/messages.constant';

const userValidation = {
    create: [
        check('name').not().isEmpty().withMessage(messages.validation.required),
        check('surname').not().isEmpty().withMessage(messages.validation.required),
        check('username').not().isEmpty().withMessage(messages.validation.required)
    ],
    update: [
        check('name').not().isEmpty().withMessage(messages.validation.required),
        check('surname').not().isEmpty().withMessage(messages.validation.required)
    ]
};

export default userValidation;