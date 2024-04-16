class BaseError extends Error {
    constructor(errName, statusCode, msgDescription, details) {
        super(msgDescription);
        this.errName = errName;
        this.statusCode = statusCode;
        this.msgDescription = msgDescription;
        this.details = details;
    }
}

module.exports = BaseError;