const express = require('express')
const userRouter = express.Router()
const bcrypt = require("bcrypt")       // for hash the password 
const jwt = require("jsonwebtoken")   // for generating token for user authentication
const userModel = require('../models/user.model')  // imported the user model 

// Get All Users - Need auth - admin 
userRouter.get("/", (req, res) => {
    try {
        res.send("get all users working fine !")
    } catch (error) {
        res.status(500).json({ err: error, message: " Internal Server Error !" })
    }
})

// usser Registration
userRouter.post("/register", async (req, res) => {
    try {
        const { name, email, username, password } = req.body   // getting user details from req.body
        // console.log(name, email, username, password);
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(password, hashedPassword);
        const newUser = new userModel({ name, email, username, password: hashedPassword })
        const savedUser = await newUser.save()
        res.status(201).json({ savedUser, message: "User Succeessfully Registered !" })
    } catch (error) {
        res.status(500).json({ err: error, message: " Internal Server Error !" })
    }
})

// usser login functionality 
userRouter.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await userModel.findOne({ username })
        if (!user) {
            return res.status(404).json({ err: error, message: "User Not Found !" })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            res.status(400).json({ err: error, message: "Wrong Password Try again !" })
        }
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.SECRET_KEY)

        res.json({ token, message: "User Logged in Successfully !" })

    } catch (error) {
        res.status(500).json({ err: error, message: " Internal Server Error !" })
    }
})


module.exports = userRouter