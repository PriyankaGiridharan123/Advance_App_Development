import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserLogin from './Components/Login'
import UserRegister from './Components/Register'

function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
     <Routes>
     <Route path="/" element ={<UserLogin/>}></Route>
     <Route path="/usersignup" element={<UserRegister/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
