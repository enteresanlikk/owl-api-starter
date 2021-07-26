'use strict';
import Result from './Result';

class ValidationErrorResult extends Result {
    constructor(errors, message) {
        super(false, message);
        this.errors = errors;
    }
}

export default ValidationErrorResult;