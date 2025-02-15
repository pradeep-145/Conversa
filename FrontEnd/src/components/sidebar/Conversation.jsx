import React, { useState } from 'react'
import useConversation from "../../zustand/useConversation"
import { useSocket } from '../../context/SocketContext'
const Conversation = ({ conversation,emoji,lastIdx }) => {
    const {selectedConversation,setSelectedConversation}=useConversation()
    const {onlineUsers}=useSocket()
    const isOnline=onlineUsers.includes(conversation._id)
    const isSelected=selectedConversation?._id===conversation._id;
    return (<>
        <div className={`flex items-center gap-2 rounded p-2 py-1 hover:bg-pink-500 cursor-pointer ${isSelected?"bg-pink-500":""}`} onClick={()=>setSelectedConversation(conversation)}>
            <div className={`avatar ${isOnline?'online':'offline'}` }>
                <div className='w-12 rounded-full '>
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>

            <div className='flex flex-1 flex-col'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'> {conversation.name}</p>
                    <span className='text-xl'>{emoji}</span>

                </div>
            </div>
        </div>
        {!lastIdx&&
        <div className=' divider my-0 py-0 h-1'></div>}
    </>
    )
}

export default Conversation