import React, { useRef } from 'react'
import Message from './Message'
import useConversation from '../../zustand/useConversation'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import MessageSkeleton from '../skeletons/MessageSkeleton'

const Messages = () => {
  const [loading,setLoading]=useState(false)
  const lastMessageRef=useRef()
  const {messages, setMessages, selectedConversation}=useConversation()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100)
  },[messages])
  useEffect(()=>{
    
    const getMessages=async ()=>{
      setLoading(true)
      try {
        const res= await axios.get(`http://localhost:3000/api/messages/${selectedConversation._id}`,{withCredentials:true});
        
        setMessages(res.data)
        

      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
    if(selectedConversation?._id){
      getMessages()
    }
  },[selectedConversation?._id,setMessages])


  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading?[...Array(3)].map((_,idx)=><MessageSkeleton key={idx} />)
    :
    messages.length===0?
    <p className='text-center'>Send a message to start the conversation</p>
    :  
       messages.map((message,idx)=>(
         <div key={message._id}
         ref={lastMessageRef}>

         <Message  message={message}></Message>
         </div>
        ))
      }
    </div>
  )
}

export default Messages