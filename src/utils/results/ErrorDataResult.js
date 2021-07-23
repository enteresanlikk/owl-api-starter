'use strict';
const DataResult = require('./DataResult');

const errorDataResult = class ErrorDataResult extends DataResult {
    constructor(data, message) {
        super(false, message, data);
    }
};

module.exports = errorDataResult;