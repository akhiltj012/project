import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Login } from '../Login/Login';
import { SignUp } from '../Signup/SignUp';
import { Otp } from '../Signup/Otp/Otp';
import { Home } from '../Home/Home';

export const Routers = () => {
  return (
    
 <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/home" element={<Home />} />
      
    </Routes>
  
    
  )
   
}
