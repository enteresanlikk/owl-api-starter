'use strict';
const Result = require('./Result');

const validationErrorResult = class ValidationErrorResult extends Result {
    constructor(errors, message) {
        super(false, message);
        this.errors = errors;
    }
};

module.exports = validationErrorResult;