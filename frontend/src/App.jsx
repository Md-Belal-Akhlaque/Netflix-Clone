
import Player from './pages/Player/Player'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './pages/SignUp/Signup'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'

import { ToastContainer, toast } from 'react-toastify';

function App() {

  const notify = () => toast("Wow so easy!");

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate('/');
        // {notify};
      }
      else {
        console.log("logged out");
        navigate('/login');
      }
    })
  }, [])

  return (
    <>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </>
  )
}

export default App
