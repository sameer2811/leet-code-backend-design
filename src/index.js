const {
    errorHandler
} = require('./util/errorHandler.js');
const {
    connectToDataBase
} = require('./config/db.config.js');

const apiRouter = require('./routes/index.js');
const PORT = require('./config/server.config.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

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
app.listen(PORT, async function () {
    console.log("Server started Listening at PORT ", PORT);
    await connectToDataBase();
    console.log("Connected to Mongoose DB successfuly");
});