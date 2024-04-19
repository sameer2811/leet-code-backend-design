const mongoose = require("mongoose");

async function connectToDataBase() {
    let urlToHit = "";
    let DEVELOPEMENT_URL = "mongodb+srv://sameerbisht2315:Nk6cM98wN3sTOpSH@cluster0.dexpdaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    console.log("Hey inside the db config dev", process.env.DEV_MODE);
    if (true || process.env.DEV_MODE == "development") {
        urlToHit = process.env.DEVELOPEMENT_URL;
        console.log("Hey inside the db config dev", urlToHit);
    } else {
        console.log("Hey inside the db config prod ", urlToHit);

    }
    await mongoose.connect(DEVELOPEMENT_URL);
}

module.exports = {
    connectToDataBase
};
