import React from 'react'

const Conversation = ({ conversation }) => {
    return (<>
        <div className='flex items-center gap-2 rounded p-2 py-1 hover:bg-pink-500 cursor-pointer'>
            <div className='avator online'>
                <div className='w-12 rounded-full '>
                    <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" />
                </div>
            </div>

            <div className='flex flex-1 flex-col'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'> {conversation.name}</p>
                    <span className='text-xl'>😀</span>

                </div>
            </div>
        </div>
        <div className=' divider my-0 py-0 h-1'></div>
    </>
    )
}

export default Conversation