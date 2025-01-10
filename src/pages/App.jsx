import '../App.css';
import { useEffect, useState } from 'react';
import { getHello } from '../api/routes';
import Header from '../components/header';

const App = ()=>{

  //const IMAGES = [skate1,skate2,skate3]
  const [message,setMessage] = useState(" ");

  // useEffect(()=>{
  //   getHello().then(data => setMessage(data.message));
  // })
  return(
    <>
    <section className=' flex flex-col'>
      <Header></Header>
    </section>
    </>
  )
}
export default App;
