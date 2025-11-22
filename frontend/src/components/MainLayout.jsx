import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Header from './Header';

const MainLayout = () => {
  return (
      <div className='flex flex-col min-h-screen'>
        <header>
          <Header/>
          <Navbar/>
        </header>
        <div className='flex-1'>
            <Outlet/>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout
