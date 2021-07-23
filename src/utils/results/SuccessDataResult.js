'use strict';
const DataResult = require('./DataResult');

const successDataResult = class SuccessDataResult extends DataResult {
    constructor(data, message) {
        super(true, message, data);
    }
};

module.exports = successDataResult;