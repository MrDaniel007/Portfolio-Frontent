import { useState, useEffect } from 'react'
import myRouter from "./router"
import {RouterProvider} from 'react-router-dom'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import BurgerMenu from './components/BurgerMenu'
import Snowfall from 'react-snowfall'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css'
import ScrollBar from './components/ScrollIndicator'
import ScrollLift from './components/ScrollLift'

function App() {

 useEffect(() => {
    window.scrollTo(0, 0); // при загрузке страницы скролл вверх
  }, []);

useEffect(() => {
  AOS.init({
    duration: 1000,       // Длительность анимации
    easing: 'ease-out-cubic',
    once: true,           // Анимация повторяется при скролле
    mirror: false,
    disable: 'phone', // Отключить на телефонах
  });
  AOS.refresh();           // Обновление всех элементов
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


<Loader/>
    <BurgerMenu/>


      <ScrollLift/>
    <Cursor/>
      <ScrollBar/>
      <RouterProvider router={myRouter}>
    
      </RouterProvider>
    </>

  )
}

export default App
