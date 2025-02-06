const Conversation=require('../models/conversation.model')
const Message=require("../models/message.model")
const sendMessage=async (req,res)=>{
    try{
        const senderId=req.user._id;
        const receiverId=req.params.id;
        const {message}=req.body;
        var conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation= await Conversation.create({participants:[senderId,receiverId]
            })
        }
        const newMessage= new  Message  ({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([conversation.save(),newMessage.save()])
        res.status(201).json({message:newMessage})

    }
    catch(error){
        console.log("Error at messsage controller ",error)
    }
}
module.exports = { sendMessage }