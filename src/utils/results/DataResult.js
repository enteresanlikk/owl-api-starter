'use strict';
import Result from './Result';

class DataResult extends Result {
    constructor(success, message, data) {
        super(success, message);

        this.data = data || null;
    }
}

export default DataResult;