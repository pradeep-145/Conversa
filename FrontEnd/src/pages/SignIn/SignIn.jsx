import React from 'react'
import axios from 'axios'
const SignIn = () => {
  return (

    <form className='glass shadow-lg text-black font-semibold text-3xl flex items-center justify-center gap-10 flex-col rounded-lg w-auto h-auto p-10 px-20'> Conversa

    <input type="text" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="username" placeholder='Username' id="username" />
    
    <input type="password" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="password" placeholder='Password' id="username" />
    
    
    <button className="btn btn-md text-[20px]">Login</button>
    </form>
    

  )
}

export default SignIn