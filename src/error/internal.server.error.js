const BaseError = require("./base.error");
const {
    StatusCodes
} = require('http-status-codes');

class InternalServer extends BaseError {
    constructor(msgDescription, msgDetails) {
        super("Internal-Server-Error", StatusCodes.INTERNAL_SERVER_ERROR, msgDescription, msgDetails);
    }
}

module.exports = InternalServer;