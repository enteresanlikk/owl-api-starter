'use strict';
const Result = require('./Result');

const dataResult = class DataResult extends Result {
    constructor(success, message, data) {
        super(success, message);

        this.data = data || null;
    }
};

module.exports = dataResult;