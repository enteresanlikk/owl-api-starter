'use strict';
const Result = require('./Result');

const successResult = class SuccessResult extends Result {
    constructor(message) {
        super(true, message);
    }
};

module.exports = successResult;