'use strict';
class Result {
    constructor(success, message) {
        this.success = success || false;
        this.message = message || '';
    }
}

export default Result