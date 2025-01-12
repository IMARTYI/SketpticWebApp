import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getHello } from './api/routes';
import React from 'react';
import { Router,Routes} from 'react-router-dom';
import { registerAccount } from './pages/register';

const App = ()=>{

  const [response,setResponse] = useState(" ");

  useEffect(()=>{
    response =  getHello();
    
  })
  return(
    <>
    <Routes>
      <Rotue></Rotue>
    </Routes>
    </>

  )
}
export default App;
