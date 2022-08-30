'use strict';
import mongoose from 'mongoose';
import cryptoService from '../services/crypto.service';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false, timestamps: true });

userSchema.pre('save', async function(next) {
    const user = this;

    if(!user.isModified('password')) {
        return next();
    }

    const password = await cryptoService.create(user.password);
    user.password = password;
});

export default mongoose.model('user', userSchema);