const express = require('express');
const dns = require('node:dns');
const dotenv = require('dotenv');
const connectToDatabase = require('./DB/DB.JS');


dotenv.config();
dns.setServers(['1.1.1.1']);

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/userRoutes"));

connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Elishsn .. Backend is running");
});