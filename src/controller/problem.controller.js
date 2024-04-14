const {StatusCodes} = require('http-status-codes');

function getProblemById(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        "msg": "Not Implemented"
    });

}

function getAllProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        "msg": "Not Implemented"
    });
}

function postNewProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        "msg": "Not Implemented"
    });
}

function postUpdateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        "msg": "Not Implemented"
    });
}


module.exports = {
    getProblemById,
    getAllProblems,
    postNewProblem,
    postUpdateProblem
}
