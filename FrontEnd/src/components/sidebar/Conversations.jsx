import React from 'react'
import { useState } from 'react'
import Conversation from './Conversation'
const Conversations = () => {
    const[Conversations,setConversations]=useState([
        {
            id:1,
            name:"John Doe",

        },
        {
            id:2,
            name:"Jane Doe"
        },
        {
            id:3,
            name:"John Doe",
        }
    ])
  return (
    <div className='flex py-2 flex-col overflow-auto '>
        {Conversations.map((conversation)=>(
            <Conversation key={conversation.id} conversation={conversation} />
        ))}
    </div>
  )
}

export default Conversations