import { useState, useEffect } from 'react'
import myRouter from "./router"
import {RouterProvider} from 'react-router-dom'
import ParticlesBg from './components/ParticlesBg'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import BurgerMenu from './components/BurgerMenu'
import Snowfall from 'react-snowfall'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css'
import ScrollBar from './components/ScrollIndicator'

function App() {
  const [loaded, setLoaded] = useState(false);

 useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, []);

  return (
    <>
    <Snowfall
    color='white'
    snowflakeCount={75}
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
    }}/>
    <BurgerMenu/>
  {!loaded && <Loader onFinish={() => setLoaded(true)} />}

        <Loader />
      
    <ParticlesBg/>
    <div></div>
    <Cursor/>
      <ScrollBar/>
      <RouterProvider router={myRouter}>
    
      </RouterProvider>
    </>

  )
}

export default App
