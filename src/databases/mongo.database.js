'use strict';
const mongoose = require('mongoose');

module.exports = {
    connect: async (mongoURI)=>{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log('MongoDB Connected.');
        })
        .catch(err => {
            console.log('MongoDB Error:', err);
        });
    }
};