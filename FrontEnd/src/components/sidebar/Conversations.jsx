import React, { useEffect } from 'react'
import { useState } from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis'
const Conversations =() => {
  const [loading, setLoading]=useState(false)
  const [conversations, setConversations]=useState([{}])
  useEffect(()=>{
      const getConversations=async()=>{
          try {
              setLoading(true);
              const res=await axios.get("https://conversa-ucub.onrender.com/api/users",{withCredentials:true})
              const data=await res.data;
              setConversations(data)
          } catch (error) {
              console.log(error)
          }
          finally{
              setLoading(false)
          }
      }
      getConversations();
  },[]);
  console.log(conversations)

  return (
    <div className='flex py-2 flex-col overflow-auto '>
       {conversations.map((convo,idx)=>(
        
          <Conversation key={convo._id} conversation={convo} emoji={getRandomEmoji()}
          lastIdx={idx===conversations.length-1}/>
       ))
        }

        {loading?<span className='loading loading-dots mx-auto'></span>:null}
    </div>
  )
}

export default Conversations