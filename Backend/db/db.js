const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/uber').then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(err)
    });
}

module.exports = connectToDb;