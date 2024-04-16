const {
    StatusCodes
} = require("http-status-codes");
const BaseError = require("./base.error");

class NotImplemented extends BaseError {
    constructor(msgDescription, msgDetails) {
        super("Not-Implemented", StatusCodes.NOT_IMPLEMENTED, msgDescription, msgDetails);
    }
}

module.exports = NotImplemented;