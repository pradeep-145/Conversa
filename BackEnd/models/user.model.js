import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
    }
}, { timestamps: true });

export default mongoose.model('User', userModel);
