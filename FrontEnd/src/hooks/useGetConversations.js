import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useGetConversations = () => {
    const [loading, setLoading]=useState(false)
    const [conversations, setConversations]=useState([{}])
    useEffect(()=>{
        const getConversations=async()=>{
            try {
                setLoading(true);
                const res=await axios.get("https://conversa-jsog.onrender.com/api/users",{withCredentials:true})
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

    return {loading,conversations}
    
}

export default useGetConversations