import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
const SignIn = () => {
  const {authUser,setAuthUser}=useAuthContext()
  const[loading,setLoading]=useState(false)
  const [inputs,setInputs]=useState({
    username:"",
    password:""
  })
  const navigate=useNavigate()
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const response=await axios.post('https://conversa-jsog.onrender.com/api/auth/login',{...inputs},{ withCredentials: true })
      
      if(response.data.success){
        localStorage.setItem("chat-user",JSON.stringify(response.data.message))
        setAuthUser(response.data.message)
        navigate('/chat')
      }
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }

  }
  return (
<>
    <form  className='glass shadow-lg text-black font-semibold text-3xl flex items-center justify-center gap-10 flex-col rounded-lg w-auto h-auto p-10 px-20' onSubmit={handleSubmit}> Conversa

    <input type="text" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="username" placeholder='Username' id="username" onChange={((e)=>{setInputs({...inputs,username:e.target.value})})} />
    
    <input type="password" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="password" placeholder='Password' id="password" onChange={(e)=>{setInputs({...inputs,password:e.target.value})}} />
    
    <button disabled={loading} type="submit" className="btn btn-md text-[20px]">{loading?<span className=' loading loading-spinner'></span>:"Login"}</button>
    </form>
    <a href="/sign-up" className='text-sm absolute bottom-[310px]  z-50'> Don't have an account?</a>
</>
    

  )
}

export default SignIn