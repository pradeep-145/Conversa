import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
const Chat = () => {
  const {selectedConversation}=useConversation()
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation?<NoChatSelected></NoChatSelected>:
      <>
      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text '>To:</span>
        <span className='text-gray-900 font-bold'>{selectedConversation.name}</span>
      </div>

       <Messages></Messages>
       <MessageInput></MessageInput>
      </>}
    </div>
  )
}

export default Chat

const NoChatSelected=()=>{
  return(
    <div className='flex-1 flex items-center justify-center'>
      <p className='text-gray-200 text-xl'>Select a chat to start messaging</p>
    </div>
  )
}