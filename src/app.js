'use strict';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import httpStatus from 'http-status';

dotenv.config();

import routers from './routers';
import mongodb from './databases/mongo.database';
import { ErrorResult } from './utils/results';
import messages from './constants/messages.constant';

const {
    PORT,
    MONGO_URI
} = process.env;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routers);

app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).json(new ErrorResult(messages.notFound));
});

const port = PORT || 3030;
app.listen(port, async () => {
    if(MONGO_URI) {
        await mongodb.connect(MONGO_URI);
    }
    console.log(`App started at http://localhost:${port}`);
});

export default app;
