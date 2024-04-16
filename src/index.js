const express = require('express');
const apiRouter = require('./routes/index.js');
const {errorHandler}  = require('./util/errorHandler.js');
const PORT = require('./config/server.config.js');
const app = express();




// Basic Ping Check
app.get("/", function (req, res) {
    console.log("Server is up at ", PORT);
    return res.json({
        "msg": "Alright everything fine"
    })
});

// In Case the URl starts with /api router
app.use("/api", apiRouter);
app.use(errorHandler);

// server at PORT setup
app.listen(PORT, function () {
    console.log("Server started Listening at PORT ", PORT);
});