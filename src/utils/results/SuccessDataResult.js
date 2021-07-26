'use strict';
import DataResult from './DataResult';

class SuccessDataResult extends DataResult {
    constructor(data, message) {
        super(true, message, data);
    }
}

export default SuccessDataResult;