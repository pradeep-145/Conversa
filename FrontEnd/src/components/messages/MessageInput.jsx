import axios from 'axios'
import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useConversation from '../../zustand/useConversation'
const MessageInput = () => {
  const [loading,setLoading]=useState(false)
  const {messages, setMessages,selectedConversation}=useConversation()
  const [input,setInput]=useState("")
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const res=await axios.post(`http://localhost:3000/api/messages/send/${selectedConversation._id}`,{message:input},{withCredentials:true})
      setInput("")
      setMessages([...messages,res.data.message])
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }

  }
  return (
    <form onSubmit={handleSubmit} >
        <div className='w-full relative '>
            <input type="text" className=' border text-s rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white '
            placeholder='Send a message...' onChange={(e)=>{
              setInput(e.target.value)
            }} value={input}/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' disabled={loading} >

              {loading?<span className='loading loading-spinner'></span>: <BsSend></BsSend>} 
            </button>

        </div>
    </form>
  )
}

export default MessageInput