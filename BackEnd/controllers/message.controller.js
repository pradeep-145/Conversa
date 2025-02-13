const Conversation = require('../models/conversation.model');
const messageModel = require('../models/message.model');
const Message = require("../models/message.model");
const { getReceiverSocketId } = require('../socket/socket');
const {io}=require('../socket/socket')
const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id;
        const receiverId = req.params.id;
        const { message } = req.body;
        var conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }



        await Promise.all([conversation.save(), newMessage.save()])
        
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
            
        }
        
        res.status(201).json({ message: newMessage })

    }
    catch (error) {
        console.log("Error at messsage controller ", error)
    }
}



const getMessages = async (req, res) => {
    try {
        const userToChatId = req.params.id;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");
        if (!conversation) {
            res.status(200).json([]);
        }
        else {
            var messages = conversation.messages;
            res.status(200).json(messages)
        }
    } catch (error) {
        console.log("Error at getMessages", error);
        res.status(500).json({ error: "Internal server Error" });
    }
}
module.exports = { sendMessage, getMessages }