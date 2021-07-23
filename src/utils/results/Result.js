'use strict';
const result = class Result {
    constructor(success, message) {
        this.success = success || false;
        this.message = message || '';
    }
};

module.exports = result;