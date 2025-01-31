require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const userModel = require('./models/userModel')
const authRoute = require('./routes/authRoute')
const protectedRoute = require('./routes/protectedRoute')
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected to mongodb")
}).catch((err) => {
    console.log(err)
})
app.use('/api/auth/', authRoute);
app.use('/api/protected', protectedRoute)
app.listen(3000, () => {
    console.log("server is running on http://localhost:3000/")
})