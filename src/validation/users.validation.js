'use strict';
const { check } = require('express-validator');
const { validation } = require('../constants/messages.constant');

module.exports = {
    create: () => {
        return [
            check('name').not().isEmpty().withMessage(validation.required),
            check('surname').not().isEmpty().withMessage(validation.required),
            check('username').not().isEmpty().withMessage(validation.required)
        ]
    },
    update: () => {
        return [
            check('name').not().isEmpty().withMessage(validation.required),
            check('surname').not().isEmpty().withMessage(validation.required)
        ]
    }
};