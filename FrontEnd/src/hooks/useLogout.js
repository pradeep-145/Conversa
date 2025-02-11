import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"


const useLogout = () => {
  const [loading,setLoading] = useState(false)
  const {setAuthUser}=useAuthContext()
  const logout=async()=>{
    setLoading(true)
    try{
        const res=await axios.post('http://localhost:3000/api/auth/logout')
        localStorage.removeItem('chat-user')
        setAuthUser(null)
    }
    catch(error){
        console.log(error)
    }
  }
  return {logout}
}

export default useLogout