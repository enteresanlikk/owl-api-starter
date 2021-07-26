'use strict';
import DataResult from './DataResult';

class ErrorDataResult extends DataResult {
    constructor(data, message) {
        super(false, message, data);
    }
}

export default ErrorDataResult;