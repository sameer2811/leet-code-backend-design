const {
    StatusCodes
} = require("http-status-codes");
const BaseError = require("../error/base.error");

function errorHandler(err, req, res, next) {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            sucess: false,
            errName: err.errName,
            errDescription: err.msgDescription,
            details: err.details
        })
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        sucess: false,
        errName: "Not-Found-Internal",
        errDescription: "",
        details: {}
    })
}

module.exports = {
    errorHandler
}