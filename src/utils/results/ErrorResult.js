'use strict';
const Result = require('./Result');

const errorResult = class ErrorResult extends Result {
    constructor(message) {
        super(false, message);
    }
};

module.exports = errorResult;