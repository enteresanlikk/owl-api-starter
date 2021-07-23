'use strict';
const User = require('../models/user.model');

module.exports = {
    getAll: async () => {
        return await User.find();
    },
    getById: async (id) => {
        return await User.findById(id);
    },
    getByUsername: async (username) => {
        return await User.findOne({ username });
    },
    create: async ({ name, surname, username }) => {
        const user = new User({
            name,
            surname,
            username,
            createdAt: Date.now()
        });

        return await user.save();
    },
    update: async (id, { name, surname }) => {
        return await User.findByIdAndUpdate(id, {
            name,
            surname,
            updatedAt: Date.now()
        }, { new: true });
    },
    deleteById: async (id) => {
        return await User.findByIdAndDelete(id);
    }
};