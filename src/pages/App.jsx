import '../App.css';
import { useEffect, useState } from 'react';
import { getHello } from '../api/routes';
import Header from '../components/header';
import { Route,Router,Routes } from 'react-router-dom';
import { RegisterAccount } from './register';

const App = ()=>{

  //const IMAGES = [skate1,skate2,skate3]
  const [message,setMessage] = useState(" ");

  // useEffect(()=>{
  //   getHello().then(data => setMessage(data.message));
  // })
  return(
    <>

     <Routes>
      <Route path='/login' element={<RegisterAccount/>}></Route>
    </Routes>
    <section className=' flex flex-col'>
      
    </section>
    </>
  )
}
export default App;
