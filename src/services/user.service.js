'use strict';
import User from '../models/user.model';

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
    async create({ name, surname, username }) {
        const user = new User({
            name,
            surname,
            username,
            createdAt: Date.now()
        });

        return await user.save();
    },
    async update(id, { name, surname }) {
        return await User.findByIdAndUpdate(id, {
            name,
            surname,
            updatedAt: Date.now()
        }, { new: true });
    },
    async deleteById(id) {
        return await User.findByIdAndDelete(id);
    }
};