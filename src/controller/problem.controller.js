const {
    StatusCodes
} = require('http-status-codes');
const {
    ProblemService
} = require('./../service/index.js');
const {
    ProblemRepositry
} = require('./../repository/index.js');
const NotFoundError = require('../error/not.found.error.js');


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
        console.log("printing the get All Problems response ", response);
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

async function updateProbem(req, res, next) {
    try {
        const problemId = req.params.id;
        const probemFields = req.body;
        const response = await problemService.updateProblem(probemFields, problemId);
        return res.status(StatusCodes.OK).json({
            success: true,
            "response": response,
            details: {}
        })
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req, res, next) {
    try {
        const problemId = req.params.id;
        const response = await problemService.deleteProblem(problemId);
        console.log("printing the problem delete response ", response);
        if (response.hasOwnProperty("acknowledged") && response.acknowledged && response.hasOwnProperty("deletedCount") && response.deletedCount <= 0) {
            throw new NotFoundError("Invalid Id Passed ", {
                "msg": problemId + " is not present in the collection "
            })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            "response": response,
            details: {}
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProblemById,
    getAllProblems,
    postNewProblem,
    updateProbem,
    deleteProblem
}
