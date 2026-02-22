const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./DB/DB.JS");
dotenv.config();

const app = express();

connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("john ")
});


