const BaseError = require('./base.error');
const {
    StatusCodes
} = require("http-status-codes");

class NotFoundError extends BaseError {
    constructor(msgDescription, msgDetails) {
        super('Not-Found-error', StatusCodes.NotFoundError, msgDescription, msgDetails)
    }
}

module.exports = NotFoundError;