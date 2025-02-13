import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import userRoute from './routes/user.route.js'; // Ensure this import is correct
import { app, server } from './socket/socket.js';
dotenv.config();


const __dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'FrontEnd/dist')));


app.use(cors({
    origin: ["http://localhost:3000", "https://conversa-chat-ps.vercel.app"], // Add your frontend URLs here
    credentials: true, // Allow sending cookies
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(cookieParser());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRoute);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "FrontEnd","dist","index.html"));
});

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}/`);
});