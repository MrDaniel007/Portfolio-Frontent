import React,{useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {


  return (
    <div className='w-[100%] select-none'>
      <Header  />
      <Outlet/>
      <Footer/>
    </div>
  )
};

export default Layout
