import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
const SignUp = () => {
  const navigate=useNavigate()

  const { authUser, setAuthUser } = useAuthContext();

  const [inputs,setInputs]=useState({
    username:"",
    name:"",
    password:"",
    confirmPassword:"",
    gender:""

  })
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
      const response= await axios.post("https://conversa-jsog.onrender.com/api/auth/register",{inputs})
     
      if(response.data.success){
        
         navigate('/sign-in')
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
   <>
        <form className='glass shadow-lg text-black font-semibold text-3xl flex items-center justify-center gap-10 flex-col rounded-lg w-auto h-auto p-10 px-20' onSubmit={handleSubmit}> Conversa 

        <input type="text" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="username" placeholder='Username' id="username"
         value={inputs.username} 
          onChange={(e)=>setInputs({...inputs,username:e.target.value})}
        />
        <input type="text" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="name" placeholder='Name' id="name" 
        value={inputs.name}
        onChange={(e)=>{setInputs({...inputs,name:e.target.value})}}
        />
        <input type="password" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="password" placeholder='Password' id="password" value={inputs.password} onChange={((e)=>setInputs({...inputs,password:e.target.value}))} />
        <input type="password" className='input input-bordered  border-black placeholder:text-black bg-transparent w-full max-w-xs' name="confirm-password" placeholder='Re-Type Password' id="confirm-password"  value={inputs.confirmPassword} 
        onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
        />
        <div className='flex' > 
          <div className='form-control'>
    <label className={`label gap-2 cursor-pointer`} >

        <span className='label-text'>Male</span>
        <input type="checkbox"  className="checkbox checkbox-secondary"  onChange={()=>setInputs({...inputs,gender:"male"})} />
    </label>
          </div>
          <div className='form-control'>
    <label className={`label gap-2 cursor-pointer`} >
        <span className='label-text'>Female</span>
        <input type="checkbox"  className="checkbox checkbox-secondary" onChange={()=>setInputs({...inputs,gender:"male"})} />
</label>
          </div>
        </div>
        

        
        <button type='submit' className="btn btn-md text-[20px]">Register</button>
        </form>
        <a href="/sign-in" className='text-sm absolute bottom-[275px]  z-50'> Already a User?</a>     
   </>
   
  )
}

export default SignUp