import React, { useState } from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import useConversation from '../../zustand/useConversation'
const SearchInput = () => {
  const [search,setSearch]=useState("")
  const {setSelectedConversation}=useConversation();
   
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{

    }
    catch(error){

    }
  }
    return (
    <form onSubmit={handleSubmit} className=' flex justify-center items-center p-2 gap-2 '>
        <input type="text" className='input input-bordered rounded-full' placeholder='Search...' onChange={(e)=>setSearch(e.target.value) } value={search}/>
        <button type='submit' className='btn btn-circle bg-gradient-to-br  from-pink-500 to-purple-500'>
            <IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp>

        </button>
    </form>
  )
}

export default SearchInput