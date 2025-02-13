import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import { useAuthContext } from './context/AuthContext'

function App() {
  try {
    const context = useAuthContext();
    console.log("Auth Context:", context);

    const { authUser } = context; // Check if context is defined
    return (
      <div className="h-screen p-4 flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={authUser ? <Navigate to="/chat" /> : <Navigate to="/sign-in" /> } />
            <Route path="/sign-up" element={authUser ? <Navigate to="/chat" /> : <SignUp />} />
            <Route path="/sign-in" element={authUser ? <Navigate to="/chat" /> : <SignIn />} />
            <Route path="/chat" element={authUser ? <Home /> : <Navigate to="/sign-in" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } catch (error) {
    console.error("Error using useAuthContext:", error);
    return <div>Error loading app</div>;
  }
}

export default App;
