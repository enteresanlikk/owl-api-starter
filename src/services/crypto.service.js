'use strict';
import bcrypt from 'bcrypt';

export default {
    create(password) {
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);

        return bcrypt.hash(password, saltRounds);
    },

    compare(password, hash) {
        return bcrypt.compare(password, hash);
    }
};