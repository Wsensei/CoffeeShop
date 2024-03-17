import React from 'react';
import "../components/header.css";
import img from "../assets/logo-cup1.png";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      
    <nav className='list'>
    
    <img src={img} width={50} height={50} alt="" />

    <ul className='navbar'>
        <li className='navlist'><Link to="" >Home </Link> </li>
        <li className='navlist'><Link to="/menu" >MENU </Link></li>
        <li className='navlist'><Link to="/price">PRICE</Link>  </li>
        <li className='navlist'><Link to="/addcoffee" > ADD COFFEE </Link></li>
        <li className='navlist'><Link to="/about" > ABOUT </Link> </li>
        <li className='navlist'><Link to="/visit-us" > VISIT US </Link> </li>
    </ul>

    </nav>

    </div>
  )
}

export default Header
