const express = require('express');
const problemRouter = require('./problem.router');
const v1Router = express.Router();

v1Router.use("/problem", problemRouter);

v1Router.get("/", function (req, res) {
    console.log("Server is listening at the url ending with /v1 ");
    return res.json({
        "msg": "Server is listening at the url ending with /v1"
    })
});

module.exports = v1Router;