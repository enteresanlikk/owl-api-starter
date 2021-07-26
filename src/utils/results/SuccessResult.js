'use strict';
import Result from './Result';

class SuccessResult extends Result {
    constructor(message) {
        super(true, message);
    }
}

export default SuccessResult;