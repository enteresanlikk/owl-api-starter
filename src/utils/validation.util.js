'use strict';
const { validationResult } = require('express-validator');
const { ValidationErrorResult } = require('./results');
const messages = require('../constants/messages.constant');

module.exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.json(new ValidationErrorResult(extractedErrors, messages.validation.error));
};