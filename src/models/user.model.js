'use strict';
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: null
    }
});

export default mongoose.model('user', Schema);