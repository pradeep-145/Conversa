import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <div className='h-screen p-4 flex items-center justify-center'>
    <BrowserRouter>
    <Routes>

      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/chat' element={<Home />}></Route>

    </Routes>
    </BrowserRouter>
      </div>

    </>
  )
}

export default App
