const express = require('express');
const connectDB = require('./config/db'); // db connections 
const userRouter = require('./router/user.router');  // getting all the user routes here
const app = express()
app.use(express.json())   // Body Parser 
require("dotenv").config() // important things here


// User Router Here 
app.use("/users", userRouter)


app.get("/health", (req, res) => {
    res.send("Health ROute is ruuning fine !");
})
app.listen(process.env.PORT, async () => {
    await connectDB()
    console.log(`Library_Management_SystemAPI_Masai_Evaluation App is ruuning on ${process.env.PORT}`)
}) 