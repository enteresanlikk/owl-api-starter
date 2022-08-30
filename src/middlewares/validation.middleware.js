'use strict';
import { validationResult } from 'express-validator';
import httpStatus from 'http-status';

import { ValidationErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    
    if (errors.isEmpty()) return next();

    const extractedErrors = errors.array().map(error => ({
        field: error.param,
        message: error.msg
    }));

    return res.status(httpStatus.BAD_REQUEST).json(new ValidationErrorResult(extractedErrors, messages.validation.error));
};

export default validationMiddleware;