import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import '../components/layout.css';
const Layout = () => {
  return (
    <div className='section'>
      <Header />
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
