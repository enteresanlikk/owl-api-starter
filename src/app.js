'use strict';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

import routers from './routers';
import mongodb from './databases/mongo.database';
import errorMiddleware from './middlewares/error.middleware';
import notFoundMiddleware from './middlewares/notFound.middleware';

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

app.use(errorMiddleware);
app.use(notFoundMiddleware);

const port = PORT || 3030;
app.listen(port, async () => {
    if(MONGO_URI) {
        await mongodb.connect(MONGO_URI);
    }
    console.log(`App started at http://localhost:${port}`);
});

export default app;
