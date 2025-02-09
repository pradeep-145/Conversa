import React from 'react'
import {IoSearchSharp} from 'react-icons/io5'
const SearchInput = () => {
  return (
    <form className=' flex justify-center items-center p-2 gap-2 '>
        <input type="text" className='input input-bordered rounded-full' placeholder='Search...'/>
        <button className='btn btn-circle bg-gradient-to-br  from-pink-500 to-purple-500'>
            <IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp>

        </button>
    </form>
  )
}

export default SearchInput