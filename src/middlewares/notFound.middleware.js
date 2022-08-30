'use strict';
import httpStatus from 'http-status';

import { ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

const notFoundMiddleware = (req, res) => {
    res.status(httpStatus.NOT_FOUND).send(new ErrorResult(messages.notFound));
}

export default notFoundMiddleware;