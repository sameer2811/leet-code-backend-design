const express = require('express');
const apiRouter = express.Router();
const v1Router = require("./v1/index.js");

apiRouter.use("/v1", v1Router);

apiRouter.get("/", function (req, res) {
    return res.json({
        "msg": "Server is listening at the url ending with /api"
    })
});

module.exports = apiRouter;