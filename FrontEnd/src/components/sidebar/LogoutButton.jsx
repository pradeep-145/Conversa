import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const LogoutButton = () => {
  const {logout}=useLogout()
  return (
    <div className='mt-auto'>
      
        <BiLogOut onClick={()=>{
          console.log("Hello")
          logout()}} className='w-6 h-6  text-white cursor-pointer'></BiLogOut>
    
    </div>
  )
}

export default LogoutButton