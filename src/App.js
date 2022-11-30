import React, {useEffect} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'

import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <Routes>
      
        <Route path='login' element={<GoogleOAuthProvider clientId="786249908719-nisbl441fhn6jouru0sfibeapjbqcqgl.apps.googleusercontent.com"><Login/></GoogleOAuthProvider>} />
        <Route path='/*' element={<Home/>} />
    </Routes>
  )
}

export default App
