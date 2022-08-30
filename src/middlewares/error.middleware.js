'use strict';
import httpStatus from 'http-status';

import { ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

const errorMiddleware = (error, req, res, next) => {
    const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || messages.globalError;
    res.status(status).send(new ErrorResult(message));
}

export default errorMiddleware;