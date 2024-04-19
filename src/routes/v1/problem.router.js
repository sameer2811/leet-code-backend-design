const {
    problemController
} = require('./../../controller/index.js');

const express = require('express');

const problemRouter = express.Router();

problemRouter.get("/ping", function (req, res) {
    return res.json({
        "msg": "Server started listening at /probem api",
    });
});

problemRouter.get("/:id", problemController.getProblemById);

problemRouter.get("/", problemController.getAllProblems);

problemRouter.put("/:id", problemController.updateProbem);

problemRouter.post("/", problemController.postNewProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.patch("/:id" , problemController.updateProbem);

module.exports = problemRouter;