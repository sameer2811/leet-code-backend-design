const {
    StatusCodes
} = require('http-status-codes');
const NOT_IMPLEMENTED = require('./../error/notImplemented.error.js');

function getProblemById(req, res, next) {
    try {
        throw new NOT_IMPLEMENTED("not-implemented-right-now", {})
    } catch (error) {
        next(error);
    }
}

function getAllProblems(req, res, next) {
    try {
        throw new NOT_IMPLEMENTED("not-implemented-right-now", {})
    } catch (error) {
        next(error);
    }
}

function postNewProblem(req, res, next) {
    try {
        throw new NOT_IMPLEMENTED("not-implemented-right-now", {})
    } catch (error) {
        next(error);
    }
}

function postUpdateProblem(req, res, next) {
    try {
        throw new NOT_IMPLEMENTED("not-implemented-right-now", {})

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProblemById,
    getAllProblems,
    postNewProblem,
    postUpdateProblem
}
