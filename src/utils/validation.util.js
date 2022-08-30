'use strict';
import { validationResult } from 'express-validator';
import httpStatus from 'http-status';

import { ValidationErrorResult } from './results';
import messages from '../constants/messages.constant';

export default {
    validate(req, res, next) {
        const errors = validationResult(req);
        
        if (errors.isEmpty()) return next();

        const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));

        return res.status(httpStatus.BAD_REQUEST).json(new ValidationErrorResult(extractedErrors, messages.validation.error));
    }
}