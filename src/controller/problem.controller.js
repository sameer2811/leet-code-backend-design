const {
    StatusCodes
} = require('http-status-codes');
const {
    ProblemService
} = require('./../service/index.js');
const {
    ProblemRepositry
} = require('./../repository/index.js');
const NOT_IMPLEMENTED = require('./../error/notImplemented.error.js');


const problemService = new ProblemService(new ProblemRepositry());

async function getProblemById(req, res, next) {
    try {
        const problemId = req.params.id;
        console.log("printing the problem request for the getProblem By Id ", req.url, problemId)
        console.log("printing the problem request for the getProblem By Id - 1 ", req.body)
        const response = await problemService.getProblemById(problemId);
        console.log("printing the problem creation response ", response);
        return res.status(StatusCodes.OK).json({
            success: true,
            "response": response,
            details: {}
        })
    } catch (error) {
        next(error);
    }
}

async function getAllProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        console.log("printing the problem creation response ", response);
        return res.status(StatusCodes.OK).json({
            success: true,
            "response": response,
            details: {}
        })
    } catch (error) {
        next(error);
    }
}

async function postNewProblem(req, res, next) {
    try {
        const probemData = req.body;
        const response = await problemService.createProblem(probemData);

        console.log("printing the problem creation response ", response);
        return res.status(StatusCodes.OK).json({
            success: true,
            "response": response,
            details: {}
        })
    } catch (error) {
        next(error);
    }
}

async function postUpdateProblem(req, res, next) {
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
