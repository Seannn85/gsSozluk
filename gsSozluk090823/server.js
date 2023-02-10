const express = require("express");
const { accessControl } = require("./middleware");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase")
const routers = require('./routers/index');

// Environment Variables
dotenv.config({
    path : "./config/env/config.env"
})



// localhost:5000/api/questions
// localhost:5000/api/auth

connectDatabase();


const app = express();



const PORT = 5000 || process.env.PORT;



app.use("/api", routers);

app.use(express.json());

app.use(accessControl);
// localhost:5000/users




app.listen(PORT, () => {
  console.log("Server Started:" + PORT);
});
