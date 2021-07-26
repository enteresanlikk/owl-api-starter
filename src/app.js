'use strict';
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const {
    PORT,
    MONGO_URI
} = process.env;

const app = express();
const routes = require('./routers');
const mongodb = require('./databases/mongo.database');
const { ErrorResult } = require('./utils/results');
const messages = require('./constants/messages.constant');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', cors(), routes);

app.use(function(req, res, next) {
    res.status(404).json(new ErrorResult(messages.notFound));
});

const port = PORT || 3030;
app.listen(port, async () => {
    if(MONGO_URI) {
        await mongodb.connect(MONGO_URI);
    }
    console.log(`App listening on port ${port}`);
});
