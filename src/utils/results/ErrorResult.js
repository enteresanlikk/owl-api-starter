'use strict';
import Result from './Result';

class ErrorResult extends Result {
    constructor(message) {
        super(false, message);
    }
}

export default ErrorResult;