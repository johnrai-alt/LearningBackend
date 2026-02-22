const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL=process.env.DB_URL;

const connectToDatabase = async () => {

    try {
        await mongoose.connect(DB_URL);
        console.log("DataBase is connected")
    } catch (error) {
        console.log(`Error while connecting db is ${error}`)
    }

    console.log(DB_URL);
}

module.exports = connectToDatabase;