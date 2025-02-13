require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {app,server,io}=require('./socket/socket.js')
const userModel = require('./models/user.model')
const authRoute = require('./routes/auth.route')
const messageRoute = require('./routes/message.route')
const userRoute = require('./routes/user.route')
const cookieParser = require('cookie-parser')
app.use(express.json())

app.use(cors());

app.use(cookieParser())
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected to mongodb")
}).catch((err) => {
    console.log(err)
})
app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute)
app.use('/api/users', userRoute)
server.listen(3000, () => {
    console.log("server is running on http://localhost:3000/")
})