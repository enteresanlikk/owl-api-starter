'use strict';
import httpStatus from 'http-status';

import jwtService from '../services/jwt.service';
import { ErrorResult } from '../utils/results';
import messages from '../constants/messages.constant';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(httpStatus.UNAUTHORIZED).json(new ErrorResult(messages.auth.unauthorized));

    const user = jwtService.verifyToken(token);

    if(!user) return res.status(httpStatus.FORBIDDEN).json(new ErrorResult(messages.auth.forbidden));

    req.user = user;

    next();
}

export default authMiddleware;