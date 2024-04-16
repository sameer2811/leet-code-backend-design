const express = require('express');
const {problemController} = require('./../../controller/index.js');
const problemRouter = express.Router();

problemRouter.get("/ping", function (req, res) {
    return res.json({
        "msg": "Server started listening at /probem api",
    });
});

problemRouter.get("/:id", problemController.getProblemById);

problemRouter.get("/", problemController.getAllProblems);

problemRouter.put("/:id", problemController.postUpdateProblem)

problemRouter.post("/" , problemController.postNewProblem)

module.exports = problemRouter;