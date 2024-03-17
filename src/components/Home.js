import React from 'react';

import img from '../assets/coffee cup.png';
import '../components/home.css';


const Home = () => {
  return (
    <div>
      
    <div className="home">
<p className='details'>Sip, savor and <br /> indulge <br /> in our coffee haven.</p>
<img src={img} height={600} width={600} className='image' alt="" />
    </div>
   
    </div>
  )
}

export default Home
