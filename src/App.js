
import './App.css';
import { useState,useEffect } from 'react';
import { Login } from './Login/Login';
import { Signup } from './Signup/SignUp';
import { Routers } from './Routes/Routers';



function App() {
  return (
    <div className="App">
    <Routers/>
    </div>
  );
}

export default App;
