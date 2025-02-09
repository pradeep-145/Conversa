import React from 'react'
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
import Chat from '../../components/messages/Chat'
const Home = () => {
  return (
    <section className=' flex sm:h-[450px] md:h-[550px]   bg-pink-300 rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  '>
     <Sidebar></Sidebar>
     <div className='divider-vertical w-2 '></div>
     <Chat></Chat>
    </section>
  )
}

export default Home