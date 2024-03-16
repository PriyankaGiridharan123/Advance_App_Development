import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserLogin from './Components/Login'
import UserRegister from './Components/Register'
import Homee from './Components/HomePage';
import AdminLogin from './Components/AdminLogin';
import AdminRegister from './Components/AdminRegister';

function App() {
  useEffect(() => {
    document.title = 'JOB SPARK'; 
  }, []);

  return (
    <>
    <div>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Homee/>}></Route>
     <Route path="/applicantlogin" element ={<UserLogin/>}></Route>
     <Route path="/applicantsignup" element={<UserRegister/>}></Route>
     <Route path="/adminlogin" element={<AdminLogin/>}></Route>
     <Route path="/adminsignup" element={<AdminRegister/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
