const jwt = require('jsonwebtoken');

export default {
    generateToken(payload, options = {}) {
        const secret = process.env.JWT_SECRET;

        return jwt.sign({
            id: payload.id,
            username: payload.username,
            name: payload.name,
            surname: payload.surname
        }, secret, options);
    },
    verifyToken(token, options = {}) {
        try {
            const secret = process.env.JWT_SECRET;

            return jwt.verify(token, secret, options);
        } catch (error) {
            return false;
        }
    }
}