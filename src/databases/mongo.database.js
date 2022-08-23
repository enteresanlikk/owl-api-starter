'use strict';
import mongoose from 'mongoose';

export default {
    async connect(mongoURI) {
        try {
            await mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true
            });

            console.log('MongoDB Connected.');
        } catch (error) {
            console.log('MongoDB Error:', error);
        }
    }
};