import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getHello } from './api/routes';

const App = ()=>{

  const [response,setResponse] = useState(" ");

  useEffect(()=>{
    response =  getHello();
    
  })
  return(

    <>
    
      <div className='bg-black'>
    
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      
      </div>
    </>

  )
}
export default App;
