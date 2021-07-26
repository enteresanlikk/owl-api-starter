'use strict';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routers';
import mongodb from './databases/mongo.database';
import { ErrorResult } from './utils/results';
import messages from './constants/messages.constant';

const {
    PORT,
    MONGO_URI
} = process.env;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', cors(), routes);

app.use((req, res) => {
    res.status(404).json(new ErrorResult(messages.notFound));
});

const port = PORT || 3030;
app.listen(port, async () => {
    if(MONGO_URI) {
        await mongodb.connect(MONGO_URI);
    }
    console.log(`App listening on port ${port}`);
});
