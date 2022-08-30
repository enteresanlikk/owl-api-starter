'use strict';
import User from '../models/user.model';
import cryptoService from '../services/crypto.service';

export default {
    async getAll() {
        return await User.find();
    },
    async getById(id) {
        return await User.findById(id);
    },
    async getByUsername(username) {
        return await User.findOne({ username });
    },
    async getByUsernameAndPassword(username, password) {
        const user = await User.findOne({ username });
        if(!user) return null;

        const isMatch = await cryptoService.compare(password, user.password);
        if(!isMatch) return null;

        return user;
    },
    async create({ name, surname, username, password }) {
        const user = new User({
            username,
            name,
            surname,
            password
        });

        return await user.save();
    },
    async update(id, { name, surname, password }) {
        return await User.findByIdAndUpdate(id, {
            name,
            surname,
            password
        }, { new: true });
    },
    async deleteById(id) {
        return await User.findByIdAndDelete(id);
    }
};